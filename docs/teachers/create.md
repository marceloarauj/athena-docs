---
sidebar_position: 1
---

# Cadastrar Professor

Registra um professor na instituição, vinculando-o a um usuário existente na plataforma Athena. O professor poderá, em seguida, ter matérias e disponibilidade de horários configuradas.

## Endpoint

```
POST /api/teacher
Content-Type: application/json
```

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `userId` | `guid` | ✅ | ID do usuário na plataforma Athena |
| `name` | `string` | ✅ | Nome completo do professor |
| `email` | `string` | ✅ | Email do professor |

## Exemplo de Requisição

```json
{
  "userId": "user-guid...",
  "name": "Carlos Alberto Souza",
  "email": "carlos.souza@escola.edu.br"
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "teacher1-guid...",
    "userId": "user-guid...",
    "name": "Carlos Alberto Souza",
    "email": "carlos.souza@escola.edu.br",
    "isActive": true
  }
}
```
