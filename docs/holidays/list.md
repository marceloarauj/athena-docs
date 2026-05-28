---
sidebar_position: 2
---

# Listar Feriados

Retorna todos os feriados cadastrados na instituição.

## Endpoint

```
GET /api/holiday
```

## Exemplo de Requisição

```bash
curl http://localhost:5000/api/holiday
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": "c3d4e5f6-a7b8-9012-cdef-123456789012",
      "name": "Tiradentes",
      "date": "2026-04-21",
      "type": "National",
      "isRecurring": true
    },
    {
      "id": "d4e5f6a7-b8c9-0123-defa-234567890123",
      "name": "Aniversário da Cidade",
      "date": "2026-07-15",
      "type": "Local",
      "isRecurring": true
    }
  ]
}
```
