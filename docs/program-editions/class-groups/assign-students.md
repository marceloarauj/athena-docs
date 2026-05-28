---
sidebar_position: 3
---

# Distribuir Alunos nos Grupos

Distribui automaticamente os alunos matriculados entre os grupos de aula da edição, respeitando o limite de `maxStudents` de cada grupo e o ano/série.

**Pré-requisito:** A edição deve ter grupos de aula e alunos matriculados.

## Endpoint

```
POST /api/programedition/edition/{id}/class-groups/assign-students
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Exemplo de Requisição

```bash
curl -X POST http://localhost:5000/api/programedition/edition/a1b2.../class-groups/assign-students
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "assigned": 85,
    "unassigned": 0
  }
}
```
