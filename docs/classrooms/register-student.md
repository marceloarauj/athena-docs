---
sidebar_position: 3
---

# Matricular Aluno na Turma

Registra um aluno em uma turma específica. O aluno passa a participar das aulas e ter frequência registrada nas `DayLessons` dessa turma. Respeita o limite de `maxStudents` caso definido.

## Endpoint

```
POST /api/classroom/register-student
Content-Type: application/json
```

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `studentId` | `guid` | ✅ | ID do aluno (usuário na plataforma Athena) |
| `classroomId` | `guid` | ✅ | ID da turma |

## Exemplo de Requisição

```json
{
  "studentId": "d4e5f6a7-b8c9-0123-defa-234567890123",
  "classroomId": "c3d4e5f6-a7b8-9012-cdef-123456789012"
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "studentId": "d4e5f6a7-b8c9-0123-defa-234567890123",
    "classroomId": "c3d4e5f6-a7b8-9012-cdef-123456789012",
    "registeredAt": "2026-05-24T10:00:00Z"
  }
}
```

## Erros Comuns

| Código | Causa |
|--------|-------|
| `400` | Aluno já registrado na turma ou turma com vagas esgotadas |
| `404` | Aluno ou turma não encontrados |
