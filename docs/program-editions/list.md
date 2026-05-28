---
sidebar_position: 2
---

# Listar Edições de Programa

Retorna todas as edições de um programa acadêmico específico.

## Endpoint

```
GET /api/programedition/{programId}
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `programId` | `guid` | ID do programa acadêmico |

## Exemplo de Requisição

```bash
curl http://localhost:5000/api/programedition/3fa85f64-5717-4562-b3fc-2c963f66afa6
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "name": "Ensino Médio 2026",
      "startDate": "2026-02-02",
      "endDate": "2026-12-18",
      "status": "Published"
    }
  ]
}
```
