---
sidebar_position: 3
---

# Encerrar Edição

Encerra uma edição de programa, marcando-a como `Closed`. Indica que o ano letivo foi concluído. Após o encerramento, nenhuma alteração de matrícula, grade ou calendário é permitida.

## Endpoint

```
POST /api/programedition/edition/{id}/close
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Exemplo de Requisição

```bash
curl -X POST http://localhost:5000/api/programedition/edition/a1b2.../close
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "status": "Closed",
    "closedAt": "2026-12-20T10:00:00Z"
  }
}
```

## Erros Comuns

| Código | Causa |
|--------|-------|
| `400` | Edição não está no status `Published` |
