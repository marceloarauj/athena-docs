---
sidebar_position: 3
---

# Listar Currículo

Retorna as matérias do currículo de uma edição. Pode ser filtrado por ano/série.

## Endpoint

```
GET /api/programedition/edition/{id}/curriculum
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Query Parameters

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `gradeOrYear` | `integer` | ❌ | Filtra por ano/série específica |

## Exemplo de Requisição

```bash
curl "http://localhost:5000/api/programedition/edition/a1b2c3d4-e5f6-7890-abcd-ef1234567890/curriculum?gradeOrYear=1"
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": "d4e5f6a7-b8c9-0123-defa-234567890123",
      "subjectId": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
      "subjectName": "Matemática",
      "gradeOrYear": 1,
      "periodNumber": 1,
      "weeklyHours": 4,
      "totalHours": 80
    }
  ]
}
```
