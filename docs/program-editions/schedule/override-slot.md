---
sidebar_position: 6
---

# Substituir Slot de Grade Horária

Substitui manualmente a alocação de um slot específico na grade horária. Use para resolver conflitos individuais sem precisar regenerar toda a grade.

## Endpoint

```
PUT /api/programedition/edition/{id}/schedule/{scheduleId}
Content-Type: application/json
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |
| `scheduleId` | `guid` | ID do slot de grade a ser substituído |

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `classGroupId` | `guid` | ✅ | Grupo de aula que vai receber a aula |
| `subjectId` | `guid` | ✅ | Matéria a ser alocada |
| `teacherId` | `guid` | ✅ | Professor que vai ministrar |
| `dayOfWeek` | `DayOfWeek` | ✅ | Dia da semana (`0=Sunday`, `1=Monday` ... `6=Saturday`) |
| `scheduleSlotId` | `guid` | ✅ | Slot de horário do turno |

## Exemplo de Requisição

```json
{
  "classGroupId": "cg1-...",
  "subjectId": "sub1-...",
  "teacherId": "teacher1-...",
  "dayOfWeek": 1,
  "scheduleSlotId": "slot1-..."
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "sched1-...",
    "classGroupName": "1° Ano A",
    "subjectName": "Matemática",
    "teacherName": "Prof. Carlos",
    "dayOfWeek": "Monday"
  }
}
```
