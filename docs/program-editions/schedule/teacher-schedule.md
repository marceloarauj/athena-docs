---
sidebar_position: 3
---

# Grade Horária do Professor

Retorna a grade horária de um professor em uma edição, mostrando todas as turmas e horários em que ele leciona.

## Endpoint

```
GET /api/programedition/edition/{id}/teachers/{teacherId}/schedule
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |
| `teacherId` | `guid` | ID do professor |

## Exemplo de Requisição

```bash
curl http://localhost:5000/api/programedition/edition/a1b2.../teachers/t1.../schedule
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
      "classGroupName": "1° Ano A",
      "roomName": "Sala 101"
    },
    {
      "dayOfWeek": "Monday",
      "startTime": "09:30:00",
      "endTime": "10:30:00",
      "subjectName": "Matemática",
      "classGroupName": "1° Ano B",
      "roomName": "Sala 102"
    }
  ]
}
```
