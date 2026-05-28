---
sidebar_position: 1
---

# Listar Permissões

Retorna todas as permissões do usuário autenticado, com o status de cada uma (`isGranted`). O usuário é identificado pelo claim `sub` do JWT.

## Endpoint

```
GET /api/profile/permissions
Authorization: Bearer {token}
```

## Autenticação

Requer token JWT válido obtido via `POST /api/authentication`.

## Exemplo de Requisição

```bash
curl -X GET http://localhost:5216/api/profile/permissions \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "code": "CREATE_ROLE",
      "description": "Criar perfis de acesso",
      "isGranted": true
    },
    {
      "code": "UPDATE_ROLE",
      "description": "Editar perfis de acesso",
      "isGranted": false
    }
  ],
  "error": null
}
```

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `code` | `string` | Código único da permissão |
| `description` | `string` | Descrição legível da permissão |
| `isGranted` | `boolean` | Se a permissão está ativa para o usuário |

## Erros Comuns

| Código | Causa |
|--------|-------|
| `400` | Claim `sub` ausente ou inválido no token |
| `401` | Token ausente, inválido ou expirado |
