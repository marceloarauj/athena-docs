---
id: intro
title: Athena AI — Visão Geral
sidebar_label: Visão Geral
sidebar_position: 1
---

# Athena AI API

Microsserviço de inteligência artificial da plataforma Athena Students Union. Responsável por orquestrar modelos de linguagem, busca semântica (RAG) e geração de respostas em tempo real.

## Tecnologias

| Componente | Detalhe |
|---|---|
| Runtime | .NET 10 / ASP.NET Core |
| Orquestração | Microsoft Semantic Kernel |
| Banco vetorial | PostgreSQL + pgvector (porta `5457`) |
| Streaming | Server-Sent Events (SSE) |
| Porta HTTP | `5037` |

## Como funciona

```
Usuário → GET /api/chat/assistant?prompt=...
                  │
                  ▼
        SemanticKernelService
          ├─ DocumentSearchService  (RAG: busca chunks relevantes)
          ├─ EmbeddingService       (vetoriza o prompt)
          └─ LLM (streaming)        (gera resposta token a token)
                  │
                  ▼
        text/event-stream (SSE)  →  Usuário recebe em tempo real
```

O serviço indexa automaticamente a documentação do projeto em segundo plano (`DocumentIndexerJob`) para enriquecer as respostas com contexto atualizado.

## Rotas disponíveis

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/api/chat/assistant` | Envia um prompt e recebe resposta via SSE |

## Acesso local

```bash
http://localhost:5037
```

O endpoint OpenAPI fica disponível em modo desenvolvimento em:

```
GET http://localhost:5037/openapi/v1.json
```
