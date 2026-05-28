---
sidebar_position: 3
---

# Resumo do Calendário

Retorna um resumo agregado do calendário letivo da edição: total de dias letivos, feriados e recessos por período.

## Endpoint

```
GET /api/programedition/edition/{id}/calendar/summary
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Exemplo de Requisição

```bash
curl http://localhost:5000/api/programedition/edition/a1b2c3d4-e5f6-7890-abcd-ef1234567890/calendar/summary
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "totalSchoolDays": 200,
    "totalHolidays": 12,
    "totalRecessDays": 10,
    "periods": [
      {
        "periodId": "p1-...",
        "periodName": "1° Bimestre",
        "schoolDays": 50,
        "holidays": 3,
        "recessDays": 0
      }
    ]
  }
}
```
