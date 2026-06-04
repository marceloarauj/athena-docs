---
id: assistant
title: Chat · Assistant
sidebar_label: Assistant
---

# GET /api/chat/assistant

Envia um prompt ao assistente de IA e recebe a resposta gerada em tempo real via **Server-Sent Events (SSE)**.

## Request

```
GET /api/chat/assistant?prompt={prompt}
```

### Query Parameters

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `prompt` | `string` | ✅ | Pergunta ou instrução enviada ao assistente |

### Exemplo

```bash
curl -N "http://localhost:5037/api/chat/assistant?prompt=Quais+são+as+disciplinas+disponíveis?"
```

## Response

**Content-Type:** `text/event-stream`

A resposta é entregue como um stream SSE. Cada evento contém um fragmento de texto gerado pelo modelo.

### Formato dos eventos

```
data: fragmento de texto aqui

data: continuação do texto

data: [DONE]

```

Cada linha `data:` é um trecho incremental da resposta. O cliente deve concatenar os fragmentos na ordem de chegada para montar o texto completo.

### Exemplo de stream

```
data: Ol

data: á! As disciplinas

data:  disponíveis são:

data: \n\n- Matemática\n- Português\n- Ciências

data: [DONE]
```

### Headers de resposta

| Header | Valor |
|---|---|
| `Content-Type` | `text/event-stream` |
| `Cache-Control` | `no-cache` |
| `X-Accel-Buffering` | `no` |

## Consumo via JavaScript (EventSource)

```js
const url = `http://localhost:5037/api/chat/assistant?prompt=${encodeURIComponent(prompt)}`;
const source = new EventSource(url);

source.onmessage = (e) => {
  if (e.data === '[DONE]') { source.close(); return; }
  output += e.data;
};

source.onerror = () => source.close();
```

## Consumo via Fetch (streaming)

```js
const response = await fetch(
  `http://localhost:5037/api/chat/assistant?prompt=${encodeURIComponent(prompt)}`
);

const reader = response.body.getReader();
const decoder = new TextDecoder();
let buffer = '';

while (true) {
  const { done, value } = await reader.read();
  if (done) break;

  buffer += decoder.decode(value, { stream: true });
  const lines = buffer.split('\n');
  buffer = lines.pop();

  for (const line of lines) {
    if (line.startsWith('data: ')) {
      const chunk = line.slice(6).trim();
      if (chunk && chunk !== '[DONE]') output += chunk;
    }
  }
}
```

## Erros

Em caso de erro durante o streaming, o serviço envia um evento de erro antes de encerrar a conexão:

```
event: error
data: Descrição do erro

```

| Situação | Comportamento |
|---|---|
| Prompt vazio | Stream encerra imediatamente sem dados |
| Erro interno | Evento `error` enviado, conexão encerrada |
| Timeout do LLM | Evento `error` enviado com descrição |
