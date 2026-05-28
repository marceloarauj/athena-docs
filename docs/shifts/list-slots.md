---
sidebar_position: 4
---

# Listar Slots de Horário

Retorna todos os slots de horário de um turno, ordenados pela ordem de ocorrência.

## Endpoint

```
GET /api/shift/{shiftId}/slots
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `shiftId` | `guid` | ID do turno |

## Exemplo de Requisição

```bash
curl http://localhost:5000/api/shift/shift1-guid.../slots
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    { "id": "slot1-...", "order": 1, "startTime": "07:30:00", "endTime": "08:30:00" },
    { "id": "slot2-...", "order": 2, "startTime": "08:30:00", "endTime": "09:30:00" },
    { "id": "slot3-...", "order": 3, "startTime": "09:45:00", "endTime": "10:45:00" }
  ]
}
```
