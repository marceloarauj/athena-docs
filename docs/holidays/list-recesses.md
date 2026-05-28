---
sidebar_position: 5
---

# Listar Recessos

Retorna todos os recessos cadastrados em uma edição de programa específica.

## Endpoint

```
GET /api/holiday/recess/{editionId}
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `editionId` | `guid` | ID da edição do programa |

## Exemplo de Requisição

```bash
curl http://localhost:5000/api/holiday/recess/3fa85f64-5717-4562-b3fc-2c963f66afa6
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": "e5f6a7b8-c9d0-1234-efab-345678901234",
      "name": "Recesso de Julho",
      "startDate": "2026-07-14",
      "endDate": "2026-07-18"
    }
  ]
}
```
