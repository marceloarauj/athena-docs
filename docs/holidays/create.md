---
sidebar_position: 1
---

# Cadastrar Feriado

Registra um feriado no calendário da instituição. Feriados são excluídos do calendário letivo durante a geração de períodos e grade horária. Podem ser recorrentes (se repetem todo ano) ou pontuais.

## Endpoint

```
POST /api/holiday
Content-Type: application/json
```

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `name` | `string` | ✅ | Nome do feriado. Ex: `"Carnaval"` |
| `date` | `date` | ✅ | Data do feriado no formato `YYYY-MM-DD` |
| `type` | `HolidayType` | ✅ | `National`, `Regional`, `Local` |
| `isRecurring` | `boolean` | ❌ | Se o feriado se repete anualmente (default: `false`) |

## Exemplo de Requisição

```json
{
  "name": "Tiradentes",
  "date": "2026-04-21",
  "type": "National",
  "isRecurring": true
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "c3d4e5f6-a7b8-9012-cdef-123456789012",
    "name": "Tiradentes",
    "date": "2026-04-21",
    "type": "National",
    "isRecurring": true
  }
}
```
