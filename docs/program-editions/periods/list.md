---
sidebar_position: 3
---

# Listar Períodos

Retorna todos os períodos letivos de uma edição, ordenados por número.

## Endpoint

```
GET /api/programedition/edition/{id}/periods
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Exemplo de Requisição

```bash
curl http://localhost:5000/api/programedition/edition/a1b2c3d4-e5f6-7890-abcd-ef1234567890/periods
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": "p1-...",
      "number": 1,
      "name": "1° Bimestre",
      "startDate": "2026-02-02",
      "endDate": "2026-04-10"
    },
    {
      "id": "p2-...",
      "number": 2,
      "name": "2° Bimestre",
      "startDate": "2026-04-13",
      "endDate": "2026-06-30"
    }
  ]
}
```
