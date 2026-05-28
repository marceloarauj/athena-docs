---
sidebar_position: 2
---

# Matricular Alunos em Lote

Matricula múltiplos alunos em uma edição de uma só vez. Ideal para importações iniciais ou rematrículas em massa.

## Endpoint

```
POST /api/programedition/edition/{id}/enroll/bulk
Content-Type: application/json
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `students` | `BulkEnrollItem[]` | ✅ | Lista de alunos a matricular |

### Objeto `BulkEnrollItem`

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `studentId` | `guid` | ✅ | ID do aluno |
| `gradeOrYear` | `integer` | ❌ | Ano/série |

## Exemplo de Requisição

```json
{
  "students": [
    { "studentId": "d4e5f6a7-b8c9-0123-defa-234567890123", "gradeOrYear": 1 },
    { "studentId": "e5f6a7b8-c9d0-1234-efab-345678901234", "gradeOrYear": 1 },
    { "studentId": "f6a7b8c9-d0e1-2345-fabc-456789012345", "gradeOrYear": 2 }
  ]
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "enrolled": 3,
    "skipped": 0
  }
}
```
