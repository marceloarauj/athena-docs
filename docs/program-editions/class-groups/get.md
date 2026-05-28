---
sidebar_position: 5
---

# Buscar Grupo de Aula

Retorna os detalhes de um grupo de aula específico, incluindo os alunos matriculados.

## Endpoint

```
GET /api/programedition/edition/{id}/class-groups/{groupId}
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |
| `groupId` | `guid` | ID do grupo de aula |

## Exemplo de Requisição

```bash
curl http://localhost:5000/api/programedition/edition/a1b2.../class-groups/cg1-guid...
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "cg1-...",
    "name": "1° Ano A",
    "gradeOrYear": 1,
    "maxStudents": 35,
    "students": [
      {
        "enrollmentId": "...",
        "studentId": "...",
        "studentName": "João Silva"
      }
    ]
  }
}
```
