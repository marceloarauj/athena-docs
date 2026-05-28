---
sidebar_position: 3
---

# Listar Progresso

Retorna o histórico de progresso de todos os alunos matriculados em uma edição, por período.

## Endpoint

```
GET /api/programedition/edition/{id}/progress
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Exemplo de Requisição

```bash
curl http://localhost:5000/api/programedition/edition/a1b2c3d4-e5f6-7890-abcd-ef1234567890/progress
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "enrollmentId": "f6a7b8c9-d0e1-2345-fabc-456789012345",
      "studentName": "João Silva",
      "periodId": "p1-...",
      "periodName": "1° Bimestre",
      "status": "Approved",
      "finalGrade": 8.5,
      "completionPercent": 92.0
    }
  ]
}
```
