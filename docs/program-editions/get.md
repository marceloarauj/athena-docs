---
sidebar_position: 3
---

# Buscar Edição de Programa

Retorna os detalhes completos de uma edição de programa pelo ID.

## Endpoint

```
GET /api/programedition/edition/{id}
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Exemplo de Requisição

```bash
curl http://localhost:5000/api/programedition/edition/a1b2c3d4-e5f6-7890-abcd-ef1234567890
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "academicProgramId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "Ensino Médio 2026",
    "startDate": "2026-02-02",
    "endDate": "2026-12-18",
    "status": "Published",
    "createdAt": "2026-01-10T10:00:00Z"
  }
}
```
