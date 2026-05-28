---
sidebar_position: 2
---

# Lançar Progresso Individual

Registra o resultado de um aluno em um período específico. Use para correções individuais ou lançamentos pontuais.

## Endpoint

```
POST /api/programedition/edition/{id}/progress/record
Content-Type: application/json
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `enrollmentId` | `guid` | ✅ | ID da matrícula |
| `programPeriodId` | `guid` | ✅ | ID do período letivo |
| `status` | `ProgressStatus` | ✅ | `Approved`, `Failed`, `InProgress` |
| `finalGrade` | `decimal` | ❌ | Nota final |
| `completionPercent` | `decimal` | ❌ | % de frequência |

## Exemplo de Requisição

```json
{
  "enrollmentId": "f6a7b8c9-d0e1-2345-fabc-456789012345",
  "programPeriodId": "p1-guid-aqui",
  "status": "Approved",
  "finalGrade": 9.0,
  "completionPercent": 95.0
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "pr-guid...",
    "enrollmentId": "f6a7b8c9-d0e1-2345-fabc-456789012345",
    "programPeriodId": "p1-guid-aqui",
    "status": "Approved",
    "finalGrade": 9.0,
    "completionPercent": 95.0,
    "recordedAt": "2026-04-12T10:00:00Z"
  }
}
```
