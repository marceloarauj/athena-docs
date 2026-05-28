---
sidebar_position: 2
---

# Listar Professores

Retorna todos os professores cadastrados na instituição.

## Endpoint

```
GET /api/teacher
```

## Exemplo de Requisição

```bash
curl http://localhost:5000/api/teacher
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": "teacher1-...",
      "name": "Carlos Alberto Souza",
      "email": "carlos.souza@escola.edu.br",
      "isActive": true
    }
  ]
}
```
