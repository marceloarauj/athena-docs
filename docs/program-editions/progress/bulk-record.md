---
sidebar_position: 1
---

# Lançar Progresso em Lote

Registra o resultado (aprovação/reprovação e nota) de múltiplos alunos em um período letivo de uma só vez. Use ao final de cada bimestre/semestre para lançar as notas de toda a turma.

## Endpoint

```
POST /api/programedition/edition/{id}/progress
Content-Type: application/json
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `programPeriodId` | `guid` | ✅ | ID do período letivo ao qual o progresso pertence |
| `records` | `ProgressRecord[]` | ✅ | Lista de resultados por aluno |

### Objeto `ProgressRecord`

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `enrollmentId` | `guid` | ✅ | ID da matrícula do aluno |
| `status` | `ProgressStatus` | ✅ | `Approved`, `Failed`, `InProgress` |
| `finalGrade` | `decimal` | ❌ | Nota final do período |
| `completionPercent` | `decimal` | ❌ | % de frequência no período |

## Exemplo de Requisição

```json
{
  "programPeriodId": "p1-guid-aqui",
  "records": [
    {
      "enrollmentId": "f6a7b8c9-d0e1-2345-fabc-456789012345",
      "status": "Approved",
      "finalGrade": 8.5,
      "completionPercent": 92.0
    },
    {
      "enrollmentId": "g7h8i9j0-k1l2-3456-ghij-567890123456",
      "status": "Failed",
      "finalGrade": 4.0,
      "completionPercent": 65.0
    }
  ]
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "recorded": 2,
    "errors": []
  }
}
```
