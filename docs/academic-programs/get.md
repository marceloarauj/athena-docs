---
sidebar_position: 3
---

# Buscar Programa Acadêmico

Retorna os detalhes de um programa acadêmico específico pelo seu ID.

## Endpoint

```
GET /api/academicprogram/{id}
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID do programa acadêmico |

## Exemplo de Requisição

```bash
curl http://localhost:5000/api/academicprogram/3fa85f64-5717-4562-b3fc-2c963f66afa6
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
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
}
```

## Erros Comuns

| Código | Causa |
|--------|-------|
| `404` | Programa acadêmico não encontrado |
