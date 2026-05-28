---
sidebar_position: 1
---

# Gerar Calendário

Gera o calendário letivo da edição, distribuindo os dias úteis entre os períodos e marcando feriados e recessos cadastrados. Cada dia é classificado como `SchoolDay`, `Holiday`, `Recess` ou `Weekend`.

**Pré-requisitos:** A edição deve ter períodos cadastrados e feriados configurados antes de gerar o calendário.

## Endpoint

```
POST /api/programedition/edition/{id}/generate-calendar
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Exemplo de Requisição

```bash
curl -X POST http://localhost:5000/api/programedition/edition/a1b2c3d4-e5f6-7890-abcd-ef1234567890/generate-calendar
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
    "generated": true
  }
}
```
