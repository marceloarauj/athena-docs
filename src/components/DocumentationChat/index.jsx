import React, { useCallback, useEffect, useRef, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './styles.module.css';

const AI_API_URL = 'http://localhost:5037';

// ─── Icons ───────────────────────────────────────────────────────────────────

function IconBot() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
    </svg>
  );
}
function IconSend() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
    </svg>
  );
}
function IconTrash() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
function IconX() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
  );
}
function IconLoader() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}>
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
    </svg>
  );
}

// ─── Typing indicator ────────────────────────────────────────────────────────

function TypingDots() {
  return (
    <div className={styles.typingDots}>
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </div>
  );
}

// ─── SSE streaming ───────────────────────────────────────────────────────────

/**
 * Groups consecutive `data:` lines in the same SSE event (separated by a blank
 * line) and joins them with \n before emitting — this reconstructs newlines
 * that the backend splits across multiple data fields.
 */
async function sendDocumentationMessage(prompt, onChunk, onDone, onError) {
  try {
    const response = await fetch(`${AI_API_URL}/api/chat/documentation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      onError(`Erro ${response.status}: ${response.statusText}`);
      return;
    }

    const reader = response.body?.getReader();
    if (!reader) { onError('Stream indisponível'); return; }

    const decoder = new TextDecoder();
    let buffer = '';
    let eventLines = [];

    const flushEvent = () => {
      if (eventLines.length === 0) return;
      const data = eventLines.join('\n');
      eventLines = [];
      // Use data !== '' so that whitespace-only events (e.g. a standalone \n
      // token from the LLM) are forwarded instead of being silently dropped.
      // Those newlines are structurally significant in markdown (between table
      // rows, code fence boundaries, paragraph breaks, etc.).
      if (data !== '' && data.trim() !== '[DONE]') onChunk(data);
    };

    const processLine = (line) => {
      if (line.startsWith('data: ')) {
        eventLines.push(line.slice(6));
      } else if (line === '') {
        flushEvent();
      }
    };

    while (true) {
      const { done, value } = await reader.read();
      if (done) { flushEvent(); onDone(); break; }
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() ?? '';
      lines.forEach(processLine);
    }
  } catch (err) {
    onError(err instanceof Error ? err.message : 'Erro desconhecido');
  }
}

// ─── Manual table parser ─────────────────────────────────────────────────────

/**
 * Splits markdown content into alternating text and table segments.
 * remark-gfm tables are handled manually because remark-gfm v4 (pure ESM)
 * can have silent resolution issues with Docusaurus's Webpack bundler.
 */
function parseSegments(content) {
  const lines = content.split('\n');
  const segments = [];
  let textLines = [];
  let tableLines = [];
  let inTable = false;

  const isTableLine = (line) => {
    const t = line.trim();
    return t.startsWith('|') && t.endsWith('|') && t.length > 2;
  };

  const flushText = () => {
    if (textLines.length > 0) {
      segments.push({ type: 'text', content: textLines.join('\n') });
      textLines = [];
    }
  };

  const flushTable = () => {
    if (tableLines.length > 0) {
      segments.push({ type: 'table', lines: [...tableLines] });
      tableLines = [];
    }
  };

  for (const line of lines) {
    if (isTableLine(line)) {
      if (!inTable) { flushText(); inTable = true; }
      tableLines.push(line);
    } else {
      if (inTable) { flushTable(); inTable = false; }
      textLines.push(line);
    }
  }

  if (inTable) flushTable(); else flushText();
  return segments;
}

function parseCells(line) {
  return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim());
}

function isSeparatorRow(line) {
  return /^\|[\s\-:|]+\|$/.test(line.trim());
}

function TableBlock({ lines }) {
  const sepIdx = lines.findIndex(isSeparatorRow);

  // Table is still arriving via stream — nothing to render yet
  if (sepIdx < 1) return null;

  const headers = parseCells(lines[sepIdx - 1]);
  const dataRows = lines
    .slice(sepIdx + 1)
    .filter(l => l.trim().startsWith('|'))
    .map(parseCells);

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>{headers.map((h, i) => <th key={i} className={styles.th}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {dataRows.map((row, ri) => (
            <tr key={ri}>{row.map((cell, ci) => <td key={ci} className={styles.td}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Markdown components (overrides Docusaurus global styles) ─────────────────

const mdComponents = {
  h1: ({ children }) => <p className={styles.h1}>{children}</p>,
  h2: ({ children }) => <p className={styles.h2}>{children}</p>,
  h3: ({ children }) => <p className={styles.h3}>{children}</p>,
  h4: ({ children }) => <p className={styles.h4}>{children}</p>,
  p:  ({ children }) => <p className={styles.mdParagraph}>{children}</p>,
  ul: ({ children }) => <ul className={styles.mdList}>{children}</ul>,
  ol: ({ children }) => <ol className={styles.mdList}>{children}</ol>,
  li: ({ children }) => <li className={styles.mdListItem}>{children}</li>,
  blockquote: ({ children }) => <blockquote className={styles.mdBlockquote}>{children}</blockquote>,
  a: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer" className={styles.mdLink}>{children}</a>,
  pre: ({ children }) => <>{children}</>,
  code: ({ children, className }) => {
    const isBlock = Boolean(className?.includes('language-'));
    return isBlock
      ? <div className={styles.codeBlock}><code>{children}</code></div>
      : <code className={styles.inlineCode}>{children}</code>;
  },
};

function ContentRenderer({ content, streaming }) {
  const segments = parseSegments(content);

  return (
    <>
      {segments.map((seg, i) => {
        if (seg.type === 'table') {
          return <TableBlock key={i} lines={seg.lines} />;
        }
        const text = seg.content.trim();
        if (!text) return null;
        return (
          <ReactMarkdown key={i} remarkPlugins={[remarkGfm]} components={mdComponents}>
            {seg.content}
          </ReactMarkdown>
        );
      })}
      {streaming && content && <span className={styles.cursor} />}
    </>
  );
}

// ─── Main chat panel ─────────────────────────────────────────────────────────

function DocumentationChatPanel() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const sendMessage = useCallback(async (prompt) => {
    if (!prompt.trim() || loading) return;

    const userMsg      = { id: crypto.randomUUID(), role: 'user',      content: prompt };
    const assistantId  = crypto.randomUUID();
    const assistantMsg = { id: assistantId,        role: 'assistant',  content: '', streaming: true };

    setMessages(prev => [...prev, userMsg, assistantMsg]);
    setLoading(true);

    await sendDocumentationMessage(
      prompt,
      chunk => setMessages(prev =>
        prev.map(m => {
          if (m.id !== assistantId) return m;
          const existing = m.content;
          // If the chunk starts a block-level element (table row, heading, code
          // fence) but the accumulated content doesn't end with \n, insert one.
          // This handles the edge case where the LLM emits \n as a separate
          // token that arrives in a subsequent SSE event.
          const trimmedChunk = chunk.trimStart();
          const needsNewline =
            existing.length > 0 &&
            !existing.endsWith('\n') &&
            !chunk.startsWith('\n') &&
            (trimmedChunk.startsWith('|') ||
             trimmedChunk.startsWith('#') ||
             trimmedChunk.startsWith('```'));
          return { ...m, content: existing + (needsNewline ? '\n' : '') + chunk };
        })
      ),
      () => {
        setMessages(prev =>
          prev.map(m => m.id === assistantId ? { ...m, streaming: false } : m)
        );
        setLoading(false);
      },
      error => {
        setMessages(prev =>
          prev.map(m => m.id === assistantId
            ? { ...m, content: `Erro: ${error}`, streaming: false }
            : m
          )
        );
        setLoading(false);
      },
    );
  }, [loading]);

  const handleSend = async () => {
    const prompt = input.trim();
    if (!prompt || loading) return;
    setInput('');
    if (textareaRef.current) textareaRef.current.style.height = '40px';
    await sendMessage(prompt);
  };

  const handleInputChange = e => {
    setInput(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 112)}px`;
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  return (
    <>
      {open && (
        <div className={styles.panel}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <IconBot />
              <span>Assistente de Documentação</span>
            </div>
            <div className={styles.headerRight}>
              {messages.length > 0 && (
                <button className={styles.iconBtn} onClick={() => setMessages([])} disabled={loading} title="Limpar conversa">
                  <IconTrash />
                </button>
              )}
              <button className={styles.iconBtn} onClick={() => setOpen(false)}>
                <IconX />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className={styles.messages}>
            {messages.length === 0 && (
              <div className={styles.empty}>
                <IconBot />
                <p>Tire suas dúvidas sobre a documentação e integrações da plataforma Athena Union.</p>
              </div>
            )}

            {messages.map(message => (
              <div key={message.id} className={`${styles.messageBubble} ${styles[message.role]}`}>
                <div className={`${styles.bubbleContent} ${message.role === 'user' ? styles.userBubble : styles.assistantBubble}`}>
                  {message.role === 'user' ? (
                    <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{message.content}</p>
                  ) : message.streaming && !message.content ? (
                    <TypingDots />
                  ) : (
                    <ContentRenderer content={message.content || ' '} streaming={message.streaming} />
                  )}
                </div>
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className={styles.inputArea}>
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Digite sua dúvida… (Enter para enviar)"
              disabled={loading}
              rows={1}
              className={styles.textarea}
              style={{ minHeight: '40px', maxHeight: '112px' }}
            />
            <button onClick={handleSend} disabled={loading || !input.trim()} className={styles.sendBtn}>
              {loading ? <IconLoader /> : <IconSend />}
            </button>
          </div>
        </div>
      )}

      <button
        className={styles.floatButton}
        onClick={() => setOpen(prev => !prev)}
        aria-label={open ? 'Fechar assistente' : 'Abrir assistente de documentação'}
      >
        {open ? <IconX /> : <IconBot />}
      </button>
    </>
  );
}

export default function DocumentationChat() {
  return (
    <BrowserOnly>
      {() => <DocumentationChatPanel />}
    </BrowserOnly>
  );
}
