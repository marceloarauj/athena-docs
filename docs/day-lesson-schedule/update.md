---
sidebar_position: 2
---

# Atualizar Configuração de Grade de Aulas

Atualiza os campos de uma configuração de grade de aulas existente. Todos os campos são opcionais — apenas os enviados serão alterados.

## Endpoint

```
PUT /api/daylessionscheduleconfigcontroller/{id}
Content-Type: application/json
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da configuração |

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `startDate` | `datetime` | ❌ | Nova data de início |
| `endDate` | `datetime` | ❌ | Nova data de fim |
| `lessonStartTime` | `time` | ❌ | Novo horário de início |
| `lessonEndTime` | `time` | ❌ | Novo horário de fim |
| `daysOfWeek` | `WeekDays` | ❌ | Novos dias da semana |
| `lessonCount` | `integer` | ❌ | Novo limite de aulas |
| `isActive` | `boolean` | ❌ | Ativa ou inativa a configuração |

## Exemplo de Requisição

```json
{
  "lessonStartTime": "08:00:00",
  "lessonEndTime": "09:00:00",
  "isActive": true
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "f6a7b8c9-d0e1-2345-fabc-456789012345",
    "lessonStartTime": "08:00:00",
    "lessonEndTime": "09:00:00",
    "isActive": true
  }
}
```
