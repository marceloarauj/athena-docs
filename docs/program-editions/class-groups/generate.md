---
sidebar_position: 2
---

# Gerar Grupos de Aula Automaticamente

Gera múltiplos grupos de aula de uma vez, por ano/série. Útil para criar todas as turmas de uma edição rapidamente (ex: criar 3 turmas para o 1° ano, 2 para o 2° ano etc.).

## Endpoint

```
POST /api/programedition/edition/{id}/class-groups/generate
Content-Type: application/json
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `groups` | `GroupConfig[]` | ✅ | Configurações por ano/série |

### Objeto `GroupConfig`

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `gradeOrYear` | `integer` | ✅ | Ano/série |
| `numberOfGroups` | `integer` | ✅ | Quantas turmas criar para este ano |
| `maxStudents` | `integer` | ✅ | Capacidade de cada turma |
| `roomId` | `guid` | ❌ | Sala padrão |
| `shiftId` | `guid` | ❌ | Turno padrão |

## Exemplo de Requisição

```json
{
  "groups": [
    { "gradeOrYear": 1, "numberOfGroups": 3, "maxStudents": 35 },
    { "gradeOrYear": 2, "numberOfGroups": 2, "maxStudents": 35 },
    { "gradeOrYear": 3, "numberOfGroups": 2, "maxStudents": 30 }
  ]
}
```

**Resultado:** Serão criadas as turmas: `1° Ano A`, `1° Ano B`, `1° Ano C`, `2° Ano A`, `2° Ano B`, `3° Ano A`, `3° Ano B`.

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    { "id": "...", "name": "1° Ano A", "gradeOrYear": 1, "maxStudents": 35 },
    { "id": "...", "name": "1° Ano B", "gradeOrYear": 1, "maxStudents": 35 }
  ]
}
```
