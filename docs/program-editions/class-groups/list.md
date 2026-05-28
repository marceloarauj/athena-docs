---
sidebar_position: 4
---

# Listar Grupos de Aula

Retorna todos os grupos de aula de uma edição de programa.

## Endpoint

```
GET /api/programedition/edition/{id}/class-groups
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Exemplo de Requisição

```bash
curl http://localhost:5000/api/programedition/edition/a1b2.../class-groups
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": "cg1-...",
      "name": "1° Ano A",
      "gradeOrYear": 1,
      "maxStudents": 35,
      "currentStudents": 33,
      "roomId": null,
      "shiftId": null
    }
  ]
}
```
