# Athena Students Union — Documentação

Portal de documentação técnica da plataforma Athena Students Union, construído com Docusaurus 3.

## Visão geral

Centraliza a documentação de todos os microsserviços do ecossistema Athena: contratos de API, guias de integração, autenticação, estruturas de dados e exemplos de uso. Inclui um assistente de IA embutido em todas as páginas para tirar dúvidas sobre as integrações em tempo real.

## Conteúdo

- **Institution API** — endpoints de turmas, aulas, disciplinas, notas e frequência, com Swagger gerado automaticamente a partir do código
- **Identity API** — autenticação JWT, gerenciamento de roles e permissões, integração com Keycloak
- **Athena AI API** — endpoints de chat (assistant e documentation), embeddings e RAG

## Assistente de documentação

Todas as páginas contam com um chat flutuante conectado ao backend de IA (`/api/chat/documentation`). O assistente consulta os documentos indexados via embeddings e responde exclusivamente com base na documentação disponível.

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Docusaurus 3.10 |
| Linguagem | React 19, MDX |
| Chat IA | react-markdown, SSE streaming |
| Busca | @easyops-cn/docusaurus-search-local |

## Estrutura

```
docs/
├── docs/            # Documentação em Markdown/MDX por serviço
├── src/
│   ├── components/
│   │   └── DocumentationChat/   # Chat de documentação com IA
│   └── theme/Root.js            # Monta o chat em todas as páginas
└── static/swagger/              # OpenAPI gerado automaticamente
```

## Repositórios relacionados

| Serviço | Repositório |
|---|---|
| Backend de IA | [athena-union-ai](https://github.com/marceloarauj/athena-union-ai) |
| Identidade | [athena-identity](https://github.com/marceloarauj/athena-identity) |
| Escola / Turmas | [athena-institution-service](https://github.com/marceloarauj/athena-institution-service) |
| Frontend | [athena-students-union-front](https://github.com/marceloarauj/athena-students-union-front) |
