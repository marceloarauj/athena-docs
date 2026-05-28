---
sidebar_position: 3
---

# Definir Matérias do Professor

Define quais matérias um professor pode ministrar. Esta configuração é usada durante a geração automática da grade horária para garantir que apenas professores habilitados sejam alocados a cada matéria.

## Endpoint

```
PUT /api/teacher/{teacherId}/subjects
Content-Type: application/json
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `teacherId` | `guid` | ID do professor |

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `subjectIds` | `guid[]` | ✅ | Lista de IDs das matérias que o professor pode lecionar |

## Exemplo de Requisição

```json
{
  "subjectIds": [
    "sub1-guid...",
    "sub2-guid..."
  ]
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "teacherId": "teacher1-...",
    "subjects": [
      { "id": "sub1-...", "name": "Matemática", "code": "MAT-01" },
      { "id": "sub2-...", "name": "Física", "code": "FIS-01" }
    ]
  }
}
```
