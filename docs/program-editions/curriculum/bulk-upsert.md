---
sidebar_position: 1
---

# Configurar Currículo (Bulk)

Define ou atualiza todo o currículo de uma edição de programa de uma vez. O currículo determina quais matérias são oferecidas, em qual ano/série e período, e a carga horária. Use este endpoint para importar ou resetar o currículo completo.

## Endpoint

```
PUT /api/programedition/edition/{id}/curriculum
Content-Type: application/json
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `entries` | `CurriculumEntry[]` | ✅ | Lista de entradas do currículo |

### Objeto `CurriculumEntry`

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `subjectId` | `guid` | ✅ | ID da matéria |
| `gradeOrYear` | `integer` | ❌ | Ano/série (ex: `1` para 1° ano) |
| `periodNumber` | `integer` | ❌ | Período dentro do ano (ex: `1` para 1° bimestre) |
| `weeklyHours` | `integer` | ❌ | Horas semanais da matéria |
| `totalHours` | `integer` | ❌ | Total de horas no ano |

## Exemplo de Requisição

```json
{
  "entries": [
    {
      "subjectId": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
      "gradeOrYear": 1,
      "periodNumber": 1,
      "weeklyHours": 4,
      "totalHours": 80
    },
    {
      "subjectId": "c3d4e5f6-a7b8-9012-cdef-123456789012",
      "gradeOrYear": 1,
      "periodNumber": 1,
      "weeklyHours": 3,
      "totalHours": 60
    }
  ]
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": "d4e5f6a7-b8c9-0123-defa-234567890123",
      "subjectId": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
      "subjectName": "Matemática",
      "gradeOrYear": 1,
      "periodNumber": 1,
      "weeklyHours": 4,
      "totalHours": 80
    }
  ]
}
```
