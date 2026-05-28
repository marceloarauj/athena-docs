---
id: identity-api-intro
slug: /identity-api/intro
sidebar_position: 1
---

# Identity API

API REST de identidade, autenticação e autorização da plataforma **Athena Students Union**.

## Visão Geral

A Identity API gerencia o ciclo de vida de usuários, credenciais, permissões e roles dentro da plataforma. Ela atua como o portão de entrada para os demais microserviços — todo token JWT usado nas outras APIs é emitido aqui.

## Base URL

```
http://localhost:5216/api
```

## Autenticação

Os endpoints protegidos requerem um token JWT no header `Authorization`:

```
Authorization: Bearer {token}
```

O token é obtido via `POST /api/authentication` e contém claims de permissão enriquecidas geradas localmente — não é o token do KeyCloak.

## Fluxo de Autenticação

```
1. POST /api/authentication  →  JWT enriquecido
2. Usar JWT nos headers das demais requisições
3. O JWT carrega claims "permission" consumidos pelos outros microserviços
```

> **KeyCloak** é usado apenas como armazenamento de credenciais. O token retornado ao cliente é gerado localmente pelo serviço Identity com issuer e claims próprios.

## Formato de Resposta

Todas as respostas seguem o envelope `AthenaApiResponse`:

```json
{
  "success": true,
  "data": { },
  "error": null
}
```

Em caso de erro:

```json
{
  "success": false,
  "data": null,
  "error": "Mensagem descritiva do erro"
}
```

## UI Interativa (Scalar)

```
GET /scalar
```

## OpenAPI Spec

```
GET /openapi/v1.json
```

## Swagger Estático

O spec estático está disponível em [`/swagger/identity-v1.json`](/swagger/identity-v1.json).
