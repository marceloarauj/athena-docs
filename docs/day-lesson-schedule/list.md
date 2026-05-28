---
sidebar_position: 3
---

# Listar Configurações de Grade de Aulas

Retorna todas as configurações de grade de aulas da instituição.

## Endpoint

```
GET /api/daylessionscheduleconfigcontroller
```

## Exemplo de Requisição

```bash
curl http://localhost:5000/api/daylessionscheduleconfigcontroller
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": "f6a7b8c9-d0e1-2345-fabc-456789012345",
      "startDate": "2026-02-01T00:00:00Z",
      "endDate": "2026-12-01T00:00:00Z",
      "lessonStartTime": "07:30:00",
      "lessonEndTime": "08:30:00",
      "daysOfWeek": "Monday",
      "lessonCount": null,
      "disciplineId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "isActive": true
    }
  ]
}
```
