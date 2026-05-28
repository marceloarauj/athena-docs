---
sidebar_position: 2
---

# Adicionar/Atualizar Entrada do Currículo

Insere ou atualiza uma única entrada no currículo da edição. Se já existir uma entrada para a matéria no mesmo ano/período, ela é atualizada; caso contrário, é criada.

## Endpoint

```
PUT /api/programedition/edition/{id}/curriculum/entry
Content-Type: application/json
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `subjectId` | `guid` | ✅ | ID da matéria |
| `gradeOrYear` | `integer` | ❌ | Ano/série |
| `periodNumber` | `integer` | ❌ | Número do período |
| `weeklyHours` | `integer` | ❌ | Horas semanais |
| `totalHours` | `integer` | ❌ | Total de horas |

## Exemplo de Requisição

```json
{
  "subjectId": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
  "gradeOrYear": 2,
  "periodNumber": 1,
  "weeklyHours": 5,
  "totalHours": 100
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "e5f6a7b8-c9d0-1234-efab-345678901234",
    "subjectId": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    "gradeOrYear": 2,
    "periodNumber": 1,
    "weeklyHours": 5,
    "totalHours": 100
  }
}
```
