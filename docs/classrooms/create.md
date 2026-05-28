---
sidebar_position: 1
---

# Criar Turma

Cria uma nova turma (classroom) vinculada a uma disciplina e um professor. Uma turma representa a realização de uma disciplina em um período específico, com local e datas definidos. Opcionalmente, as aulas do dia (`DayLessons`) podem ser geradas automaticamente com base na grade de horários configurada.

## Endpoint

```
POST /api/classroom
Content-Type: application/json
```

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `disciplineId` | `guid` | ✅ | ID da disciplina a ser ministrada |
| `teacherId` | `guid` | ✅ | ID do professor responsável |
| `location` | `string` | ✅ | Local/sala da turma |
| `startDate` | `datetime` | ✅ | Data de início da turma |
| `endDate` | `datetime` | ✅ | Data de encerramento da turma |
| `maxStudents` | `integer` | ❌ | Limite máximo de alunos |
| `generateDayLessons` | `boolean` | ❌ | Se `true`, gera automaticamente as aulas do dia com base na grade (default: `false`) |

## Exemplo de Requisição

```json
{
  "disciplineId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "teacherId": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
  "location": "Sala 101 - Bloco A",
  "startDate": "2026-02-03T07:00:00Z",
  "endDate": "2026-06-30T12:00:00Z",
  "maxStudents": 35,
  "generateDayLessons": true
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "c3d4e5f6-a7b8-9012-cdef-123456789012",
    "disciplineId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "teacherId": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    "location": "Sala 101 - Bloco A",
    "startDate": "2026-02-03T07:00:00Z",
    "endDate": "2026-06-30T12:00:00Z",
    "maxStudents": 35,
    "isActive": true
  }
}
```
