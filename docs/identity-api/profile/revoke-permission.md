---
sidebar_position: 3
---

# Revogar Permissão

Revoga uma permissão específica do usuário autenticado, definindo `isGranted = false` para o código informado.

## Endpoint

```
PUT /api/profile/permissions/{code}/revoke
Authorization: Bearer {token}
```

## Parâmetros

| Parâmetro | Local | Tipo | Obrigatório | Descrição |
|-----------|-------|------|-------------|-----------|
| `code` | path | `string` | ✅ | Código da permissão (ex: `CREATE_ROLE`) |

## Autenticação

Requer token JWT válido obtido via `POST /api/authentication`.

## Exemplo de Requisição

```bash
curl -X PUT http://localhost:5216/api/profile/permissions/CREATE_ROLE/revoke \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": null,
  "error": null
}
```

## Erros Comuns

| Código | Causa |
|--------|-------|
| `400` | Permissão não encontrada ou claim `sub` ausente |
| `401` | Token ausente, inválido ou expirado |
