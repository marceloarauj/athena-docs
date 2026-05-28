---
sidebar_position: 4
---

# Cadastrar Recesso

Registra um período de recesso em uma edição de programa. Diferente de feriados pontuais, um **recesso** abrange um intervalo de dias consecutivos (ex: Recesso de Julho, Semana Santa) e é vinculado a uma edição específica.

## Endpoint

```
POST /api/holiday/recess
Content-Type: application/json
```

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `programEditionId` | `guid` | ✅ | ID da edição à qual o recesso pertence |
| `name` | `string` | ✅ | Nome do recesso. Ex: `"Recesso de Julho"` |
| `startDate` | `date` | ✅ | Início do recesso (`YYYY-MM-DD`) |
| `endDate` | `date` | ✅ | Fim do recesso (`YYYY-MM-DD`) |

## Exemplo de Requisição

```json
{
  "programEditionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "name": "Recesso de Julho",
  "startDate": "2026-07-14",
  "endDate": "2026-07-18"
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "e5f6a7b8-c9d0-1234-efab-345678901234",
    "programEditionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "Recesso de Julho",
    "startDate": "2026-07-14",
    "endDate": "2026-07-18"
  }
}
```
