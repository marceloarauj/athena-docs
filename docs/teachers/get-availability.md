---
sidebar_position: 5
---

# Consultar Disponibilidade do Professor

Retorna a disponibilidade de horários de um professor.

## Endpoint

```
GET /api/teacher/{teacherId}/availability
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `teacherId` | `guid` | ID do professor |

## Exemplo de Requisição

```bash
curl http://localhost:5000/api/teacher/teacher1-guid.../availability
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    { "dayOfWeek": "Monday", "shiftId": "shift1-...", "shiftName": "Manhã", "startTime": "07:00:00", "endTime": "12:00:00" },
    { "dayOfWeek": "Tuesday", "shiftId": "shift1-...", "shiftName": "Manhã", "startTime": "07:00:00", "endTime": "12:00:00" },
    { "dayOfWeek": "Wednesday", "shiftId": "shift1-...", "shiftName": "Manhã", "startTime": "07:00:00", "endTime": "12:00:00" }
  ]
}
```
