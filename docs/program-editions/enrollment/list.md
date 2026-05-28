---
sidebar_position: 3
---

# Listar Matrículas

Retorna todas as matrículas de uma edição de programa, com o status atual de cada aluno.

## Endpoint

```
GET /api/programedition/edition/{id}/enrollments
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Exemplo de Requisição

```bash
curl http://localhost:5000/api/programedition/edition/a1b2c3d4-e5f6-7890-abcd-ef1234567890/enrollments
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": "f6a7b8c9-d0e1-2345-fabc-456789012345",
      "studentId": "d4e5f6a7-b8c9-0123-defa-234567890123",
      "studentName": "João Silva",
      "gradeOrYear": 1,
      "status": "Active",
      "enrolledAt": "2026-01-20T10:00:00Z",
      "expiresAt": null
    }
  ]
}
```
