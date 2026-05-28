---
sidebar_position: 1
---

# Criar Configuração de Grade de Aulas

Define um padrão de horário recorrente para geração automática de aulas do dia. Permite configurar em quais dias da semana as aulas ocorrem, os horários de início e fim, e para qual disciplina se aplica (ou para toda a instituição se `disciplineId` for omitido).

## Endpoint

```
POST /api/daylessionscheduleconfigcontroller
Content-Type: application/json
```

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `startDate` | `datetime` | ✅ | Data de início da recorrência |
| `endDate` | `datetime` | ❌ | Data de fim da recorrência (sem limite se omitido) |
| `lessonStartTime` | `time` | ✅ | Horário de início da aula. Ex: `"07:30:00"` |
| `lessonEndTime` | `time` | ✅ | Horário de término da aula. Ex: `"08:30:00"` |
| `daysOfWeek` | `WeekDays` | ✅ | Dias da semana com aula (flags): `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday` |
| `lessonCount` | `integer` | ❌ | Número máximo de aulas a gerar |
| `disciplineId` | `guid` | ❌ | Vincula a config a uma disciplina específica |

## Exemplo de Requisição

```json
{
  "startDate": "2026-02-01T00:00:00Z",
  "endDate": "2026-12-01T00:00:00Z",
  "lessonStartTime": "07:30:00",
  "lessonEndTime": "08:30:00",
  "daysOfWeek": "Monday",
  "disciplineId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "f6a7b8c9-d0e1-2345-fabc-456789012345",
    "startDate": "2026-02-01T00:00:00Z",
    "lessonStartTime": "07:30:00",
    "lessonEndTime": "08:30:00",
    "daysOfWeek": "Monday",
    "isActive": true
  }
}
```
