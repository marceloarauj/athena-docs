---
sidebar_position: 1
---

# Criar Role

Cria uma nova role (perfil de acesso) com permissões vinculadas. Requer que o usuário autenticado possua a permissão `CREATE_ROLE`.

## Endpoint

```
POST /api/role
Authorization: Bearer {token}
Content-Type: application/json
```

## Autenticação

Requer token JWT com a permissão `CREATE_ROLE` concedida (`isGranted: true`).

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `name` | `string` | ✅ | Nome da role (ex: `Coordenador`) |
| `description` | `string` | ✅ | Descrição do perfil de acesso |
| `permissionCodes` | `string[]` | ❌ | Lista de códigos de permissão a vincular (default: `[]`) |

## Exemplo de Requisição

```bash
curl -X POST http://localhost:5216/api/role \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Coordenador",
    "description": "Coordenador de curso com acesso à grade curricular",
    "permissionCodes": ["CREATE_ROLE", "UPDATE_ROLE"]
  }'
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "Coordenador"
  },
  "error": null
}
```

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | `uuid` | ID único da role criada |
| `name` | `string` | Nome da role |

## Erros Comuns

| Código | Causa |
|--------|-------|
| `401` | Token ausente, inválido ou expirado |
| `403` | Usuário não possui a permissão `CREATE_ROLE` |
| `400` | Dados inválidos ou permissionCodes inexistentes |
