---
sidebar_position: 1
---

# Listar Aulas do Dia

Retorna todas as aulas do dia (`DayLessons`) de uma turma. Cada aula do dia representa uma ocorrência de aula em uma data específica, com o registro de presença dos alunos. São geradas automaticamente quando a turma é criada com `generateDayLessons: true`.

## Endpoint

```
GET /api/day-lesson/{classroomId}
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `classroomId` | `guid` | ID da turma |

## Exemplo de Requisição

```bash
curl http://localhost:5000/api/day-lesson/c3d4e5f6-a7b8-9012-cdef-123456789012
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": "e5f6a7b8-c9d0-1234-efab-345678901234",
      "classroomId": "c3d4e5f6-a7b8-9012-cdef-123456789012",
      "date": "2026-03-10",
      "attendanceRegistered": true,
      "students": [
        {
          "studentId": "d4e5f6a7-b8c9-0123-defa-234567890123",
          "studentName": "João Silva",
          "isPresent": true,
          "observation": null
        }
      ]
    }
  ]
}
```
