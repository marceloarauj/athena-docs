---
sidebar_position: 2
---

# Listar Matérias

Retorna todas as matérias de um programa acadêmico.

## Endpoint

```
GET /api/subject/{programId}
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `programId` | `guid` | ID do programa acadêmico |

## Exemplo de Requisição

```bash
curl http://localhost:5000/api/subject/3fa85f64-5717-4562-b3fc-2c963f66afa6
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    { "id": "sub1-...", "name": "Matemática", "code": "MAT-01" },
    { "id": "sub2-...", "name": "Português", "code": "POR-01" },
    { "id": "sub3-...", "name": "História", "code": "HIS-01" }
  ]
}
```
