---
sidebar_position: 2
---

# Listar Turnos

Retorna todos os turnos cadastrados na instituição.

## Endpoint

```
GET /api/shift
```

## Exemplo de Requisição

```bash
curl http://localhost:5000/api/shift
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    { "id": "shift1-...", "name": "Manhã", "startTime": "07:00:00", "endTime": "12:00:00" },
    { "id": "shift2-...", "name": "Tarde", "startTime": "13:00:00", "endTime": "18:00:00" }
  ]
}
```
