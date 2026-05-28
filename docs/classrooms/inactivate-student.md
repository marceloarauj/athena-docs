---
sidebar_position: 4
---

# Inativar Aluno na Turma

Remove (inativa) o vínculo de um aluno com uma turma. O aluno deixa de aparecer nas listas de presença das próximas aulas, mas o histórico de frequência anterior é preservado.

## Endpoint

```
PATCH /api/classroom/inactivate-student
Content-Type: application/json
```

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `studentId` | `guid` | ✅ | ID do aluno |
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
  "data": true
}
```
