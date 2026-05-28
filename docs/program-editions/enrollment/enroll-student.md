---
sidebar_position: 1
---

# Matricular Aluno

Matricula um aluno em uma edição de programa. A matrícula vincula o aluno a um ano/série e controla o acesso ao conteúdo. Pode incluir referência de compra e data de expiração para instituições com cobrança.

## Endpoint

```
POST /api/programedition/edition/{id}/enroll
Content-Type: application/json
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `studentId` | `guid` | ✅ | ID do aluno |
| `gradeOrYear` | `integer` | ❌ | Ano/série em que o aluno está matriculado |
| `purchaseReference` | `string` | ❌ | Referência da compra/pagamento |
| `expiresAt` | `datetime` | ❌ | Data de expiração da matrícula |

## Exemplo de Requisição

```json
{
  "studentId": "d4e5f6a7-b8c9-0123-defa-234567890123",
  "gradeOrYear": 1,
  "purchaseReference": "PAY-2026-001234"
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "f6a7b8c9-d0e1-2345-fabc-456789012345",
    "studentId": "d4e5f6a7-b8c9-0123-defa-234567890123",
    "programEditionId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "gradeOrYear": 1,
    "status": "Active",
    "enrolledAt": "2026-01-20T10:00:00Z"
  }
}
```

## Erros Comuns

| Código | Causa |
|--------|-------|
| `400` | Aluno já matriculado nesta edição |
| `404` | Edição ou aluno não encontrado |
