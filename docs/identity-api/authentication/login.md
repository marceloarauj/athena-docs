---
sidebar_position: 1
---

# Autenticar Usuário

Autentica um usuário via e-mail e senha. O KeyCloak valida as credenciais; em caso de sucesso, o serviço gera um **JWT enriquecido localmente** com claims de permissão do usuário.

## Endpoint

```
POST /api/authentication
Content-Type: application/json
```

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `email` | `string` | ✅ | E-mail cadastrado do usuário |
| `password` | `string` | ✅ | Senha do usuário |

## Exemplo de Requisição

```bash
curl -X POST http://localhost:5216/api/authentication \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario@escola.com",
    "password": "Senha@123"
  }'
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": 30,
    "scope": "openid"
  },
  "error": null
}
```

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `token` | `string` | JWT com claims de permissão enriquecidas |
| `expiresIn` | `integer` | Tempo de expiração em minutos (configurável via `Identity:ExpiresIn`) |
| `scope` | `string` | Escopo do token |

## Erros Comuns

| Código | Causa |
|--------|-------|
| `400` | Credenciais inválidas ou usuário não encontrado no KeyCloak |
| `500` | Falha na comunicação com o KeyCloak |
