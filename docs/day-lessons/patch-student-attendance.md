---
sidebar_position: 3
---

# Corrigir Presença Individual

Atualiza a presença de um aluno específico em uma aula do dia. Útil para corrigir lançamentos individuais sem precisar reenviar toda a chamada.

## Endpoint

```
PATCH /api/day-lesson/{dayLessonId}/attendance/{studentId}
Content-Type: application/json
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `dayLessonId` | `guid` | ID da aula do dia |
| `studentId` | `guid` | ID do aluno |

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `isPresent` | `boolean` | ❌ | Novo status de presença |
| `observation` | `string` | ❌ | Observação atualizada |

## Exemplo de Requisição

```json
{
  "isPresent": true,
  "observation": "Presença confirmada após revisão"
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": true
}
```
