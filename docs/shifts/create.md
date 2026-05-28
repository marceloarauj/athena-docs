---
sidebar_position: 1
---

# Criar Turno

Cadastra um turno de funcionamento da instituição (ex: Manhã, Tarde, Noite). O turno define o intervalo de horário e é associado a grupos de aula e professores. Os **slots de horário** do turno definem os períodos exatos de cada aula dentro do turno.

## Endpoint

```
POST /api/shift
Content-Type: application/json
```

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `name` | `string` | ✅ | Nome do turno. Ex: `"Manhã"`, `"Tarde"` |
| `startTime` | `time` | ✅ | Horário de início do turno. Ex: `"07:00:00"` |
| `endTime` | `time` | ✅ | Horário de encerramento do turno. Ex: `"12:00:00"` |

## Exemplo de Requisição

```json
{
  "name": "Manhã",
  "startTime": "07:00:00",
  "endTime": "12:00:00"
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "shift1-...",
    "name": "Manhã",
    "startTime": "07:00:00",
    "endTime": "12:00:00"
  }
}
```
