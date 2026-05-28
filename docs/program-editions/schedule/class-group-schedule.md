---
sidebar_position: 2
---

# Grade Horária do Grupo

Retorna a grade horária de um grupo de aula específico, mostrando quais matérias e professores estão alocados em cada horário da semana.

## Endpoint

```
GET /api/programedition/edition/{id}/class-groups/{groupId}/schedule
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |
| `groupId` | `guid` | ID do grupo de aula |

## Exemplo de Requisição

```bash
curl http://localhost:5000/api/programedition/edition/a1b2.../class-groups/cg1.../schedule
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "dayOfWeek": "Monday",
      "startTime": "07:30:00",
      "endTime": "08:30:00",
      "subjectName": "Matemática",
      "teacherName": "Prof. Carlos",
      "roomName": "Sala 101"
    },
    {
      "dayOfWeek": "Monday",
      "startTime": "08:30:00",
      "endTime": "09:30:00",
      "subjectName": "Português",
      "teacherName": "Profa. Ana",
      "roomName": "Sala 101"
    }
  ]
}
```
