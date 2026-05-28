---
sidebar_position: 2
---

# Listar Salas

Retorna todas as salas cadastradas na instituição.

## Endpoint

```
GET /api/room
```

## Exemplo de Requisição

```bash
curl http://localhost:5000/api/room
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    { "id": "r1-...", "name": "Sala 101 - Bloco A", "capacity": 40, "hasLab": false },
    { "id": "r2-...", "name": "Lab. Informática", "capacity": 30, "hasLab": true }
  ]
}
```
