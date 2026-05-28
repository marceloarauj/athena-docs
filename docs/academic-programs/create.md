---
sidebar_position: 1
---

# Criar Programa Acadêmico

Cadastra um novo programa acadêmico na instituição. Um **Programa Acadêmico** é o modelo de curso (ex: Ensino Médio, Graduação em Direito, MBA). Ele define o tipo de programa, como o tempo é dividido (anual, semestral etc.) e se usa grade semanal fixa.

## Endpoint

```
POST /api/academicprogram
Content-Type: application/json
```

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `name` | `string` | ✅ | Nome do programa. Ex: `"Ensino Médio"` |
| `type` | `ProgramType` | ✅ | `School (1)`, `Course (2)`, `PostGraduate (3)` |
| `periodType` | `PeriodType` | ✅ | Como o ano letivo é dividido: `Annual (0)`, `Bimester (1)`, `Trimester (2)`, `Semester (3)`, `Module (4)` |
| `hasWeeklySchedule` | `boolean` | ❌ | Se usa grade semanal fixa (default: `false`) |
| `durationYears` | `integer` | ❌ | Duração em anos (default: `1`) |
| `minCompletionPercent` | `decimal` | ❌ | % mínimo de frequência para aprovação |
| `minSchoolDays` | `integer` | ❌ | Mínimo de dias letivos para aprovação |

## Exemplo de Requisição

```json
{
  "name": "Ensino Médio",
  "type": 1,
  "periodType": 1,
  "hasWeeklySchedule": true,
  "durationYears": 3,
  "minCompletionPercent": 75.0,
  "minSchoolDays": 200
}
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
