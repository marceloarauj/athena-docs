---
sidebar_position: 3
---

# Adicionar Slot de Horário

Adiciona um slot de horário a um turno. Cada **slot** representa um período de aula dentro do turno (ex: 1ª aula: 07:30–08:30, 2ª aula: 08:30–09:30). Os slots são a base para a geração da grade horária.

## Endpoint

```
POST /api/shift/{shiftId}/slots
Content-Type: application/json
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `shiftId` | `guid` | ID do turno |

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `order` | `integer` | ✅ | Ordem do slot dentro do turno (1, 2, 3...) |
| `startTime` | `time` | ✅ | Início do slot. Ex: `"07:30:00"` |
| `endTime` | `time` | ✅ | Fim do slot. Ex: `"08:30:00"` |

## Exemplo de Requisição

```json
{
  "order": 1,
  "startTime": "07:30:00",
  "endTime": "08:30:00"
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "slot1-...",
    "shiftId": "shift1-...",
    "order": 1,
    "startTime": "07:30:00",
    "endTime": "08:30:00"
  }
}
```
