---
sidebar_position: 1
---

# Criar Grupo de Aula

Cria um grupo de aula (class group) em uma edição. Um **grupo de aula** representa uma turma dentro da edição (ex: "1° Ano A", "1° Ano B"). Cada grupo tem capacidade, sala e turno definidos.

## Endpoint

```
POST /api/programedition/edition/{id}/class-groups
Content-Type: application/json
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `name` | `string` | ✅ | Nome do grupo. Ex: `"1° Ano A"` |
| `maxStudents` | `integer` | ✅ | Capacidade máxima |
| `gradeOrYear` | `integer` | ❌ | Ano/série |
| `roomId` | `guid` | ❌ | Sala atribuída ao grupo |
| `shiftId` | `guid` | ❌ | Turno (manhã, tarde, noite) |

## Exemplo de Requisição

```json
{
  "name": "1° Ano A",
  "maxStudents": 35,
  "gradeOrYear": 1,
  "roomId": "sala-guid...",
  "shiftId": "turno-guid..."
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "cg-guid...",
    "name": "1° Ano A",
    "gradeOrYear": 1,
    "maxStudents": 35,
    "currentStudents": 0
  }
}
```
