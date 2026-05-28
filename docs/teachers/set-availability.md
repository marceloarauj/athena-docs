---
sidebar_position: 4
---

# Definir Disponibilidade do Professor

Define em quais dias da semana e turnos o professor está disponível para lecionar. Esta informação é fundamental para que o algoritmo de geração de grade horária respeite a disponibilidade de cada professor.

## Endpoint

```
PUT /api/teacher/{teacherId}/availability
Content-Type: application/json
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `teacherId` | `guid` | ID do professor |

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `availabilities` | `Availability[]` | ✅ | Lista de disponibilidades |

### Objeto `Availability`

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `dayOfWeek` | `DayOfWeek` | ✅ | Dia da semana (`0=Sunday`, `1=Monday`, ..., `6=Saturday`) |
| `shiftId` | `guid` | ✅ | ID do turno no qual o professor está disponível |

## Exemplo de Requisição

```json
{
  "availabilities": [
    { "dayOfWeek": 1, "shiftId": "shift1-..." },
    { "dayOfWeek": 2, "shiftId": "shift1-..." },
    { "dayOfWeek": 3, "shiftId": "shift1-..." },
    { "dayOfWeek": 4, "shiftId": "shift1-..." },
    { "dayOfWeek": 5, "shiftId": "shift1-..." }
  ]
}
```

**Resultado:** Professor disponível de segunda a sexta no turno da Manhã.

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "teacherId": "teacher1-...",
    "availabilities": [
      { "dayOfWeek": "Monday", "shiftName": "Manhã" },
      { "dayOfWeek": "Tuesday", "shiftName": "Manhã" }
    ]
  }
}
```
