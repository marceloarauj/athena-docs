---
sidebar_position: 2
---

# Listar Programas Acadêmicos

Retorna todos os programas acadêmicos cadastrados na instituição, independente do status.

## Endpoint

```
GET /api/academicprogram
```

## Exemplo de Requisição

```bash
curl http://localhost:5000/api/academicprogram
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "name": "Ensino Médio",
      "type": "School",
      "periodType": "Bimester",
      "hasWeeklySchedule": true,
      "durationYears": 3,
      "minCompletionPercent": 75.0,
      "minSchoolDays": 200,
      "isActive": true,
      "createdAt": "2026-05-24T10:00:00Z"
    }
  ]
}
```
