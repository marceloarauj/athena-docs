---
sidebar_position: 3
---

# Excluir Feriado

Remove um feriado do calendário da instituição. Não é possível desfazer esta operação.

## Endpoint

```
DELETE /api/holiday/{id}
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID do feriado a ser removido |

## Exemplo de Requisição

```bash
curl -X DELETE http://localhost:5000/api/holiday/c3d4e5f6-a7b8-9012-cdef-123456789012
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": true
}
```

## Erros Comuns

| Código | Causa |
|--------|-------|
| `404` | Feriado não encontrado |
