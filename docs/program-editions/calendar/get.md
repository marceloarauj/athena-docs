---
sidebar_position: 2
---

# Obter Calendário

Retorna o calendário letivo completo da edição, dia a dia, com o tipo de cada dia.

## Endpoint

```
GET /api/programedition/edition/{id}/calendar
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Exemplo de Requisição

```bash
curl http://localhost:5000/api/programedition/edition/a1b2c3d4-e5f6-7890-abcd-ef1234567890/calendar
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "date": "2026-02-02",
      "dayType": "SchoolDay",
      "periodId": "p1-...",
      "periodName": "1° Bimestre",
      "holidayName": null
    },
    {
      "date": "2026-02-03",
      "dayType": "SchoolDay",
      "periodId": "p1-...",
      "periodName": "1° Bimestre",
      "holidayName": null
    },
    {
      "date": "2026-02-16",
      "dayType": "Holiday",
      "periodId": "p1-...",
      "periodName": "1° Bimestre",
      "holidayName": "Carnaval"
    }
  ]
}
```
