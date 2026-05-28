---
sidebar_position: 4
---

# Atualizar Status de Matrícula

Altera o status de uma matrícula específica. Use para suspender, cancelar ou reativar a matrícula de um aluno.

## Endpoint

```
PATCH /api/programedition/edition/{id}/enrollments/{enrollmentId}
Content-Type: application/json
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |
| `enrollmentId` | `guid` | ID da matrícula |

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `status` | `EnrollmentStatus` | ✅ | Novo status: `Active (1)`, `Suspended (2)`, `Completed (3)`, `Cancelled (4)` |

## Exemplo de Requisição

```json
{
  "status": "Suspended"
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "f6a7b8c9-d0e1-2345-fabc-456789012345",
    "status": "Suspended"
  }
}
```
