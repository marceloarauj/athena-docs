---
sidebar_position: 2
---

# Registrar Chamada Completa

Registra a presença de todos os alunos em uma aula do dia de uma vez. Ideal para lançar a chamada ao final de uma aula, enviando o status de todos os alunos matriculados.

## Endpoint

```
POST /api/day-lesson/{dayLessonId}/attendance
Content-Type: application/json
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `dayLessonId` | `guid` | ID da aula do dia |

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `students` | `StudentAttendance[]` | ✅ | Lista de presença dos alunos |

### Objeto `StudentAttendance`

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `studentId` | `guid` | ✅ | ID do aluno |
| `isPresent` | `boolean` | ✅ | Se o aluno esteve presente |
| `observation` | `string` | ❌ | Observação (ex: "Chegou atrasado") |

## Exemplo de Requisição

```json
{
  "students": [
    {
      "studentId": "d4e5f6a7-b8c9-0123-defa-234567890123",
      "isPresent": true,
      "observation": null
    },
    {
      "studentId": "e5f6a7b8-c9d0-1234-efab-345678901234",
      "isPresent": false,
      "observation": "Falta justificada"
    }
  ]
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": true
}
```
