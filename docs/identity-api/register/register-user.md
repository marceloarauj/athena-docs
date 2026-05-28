---
sidebar_position: 1
---

# Registrar Usuário

Registra um novo usuário na plataforma. O usuário é criado no **KeyCloak** via API admin e vinculado à instituição e role informadas.

## Endpoint

```
POST /api/register
Content-Type: application/json
```

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `firstName` | `string` | ✅ | Primeiro nome do usuário |
| `lastName` | `string` | ✅ | Sobrenome do usuário |
| `email` | `string` | ✅ | E-mail único do usuário |
| `roleId` | `uuid` | ✅ | ID da role (perfil de acesso) a ser atribuída |

## Exemplo de Requisição

```bash
curl -X POST http://localhost:5216/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "João",
    "lastName": "Silva",
    "email": "joao@escola.com",
    "roleId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  }'
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "email": "joao@escola.com",
    "firstName": "João",
    "lastName": "Silva",
    "sub": "kcid-abc123-def456"
  },
  "error": null
}
```

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `email` | `string` | E-mail do usuário registrado |
| `firstName` | `string` | Primeiro nome |
| `lastName` | `string` | Sobrenome |
| `sub` | `string` | Subject ID gerado pelo KeyCloak — identificador único do usuário |

## Erros Comuns

| Código | Causa |
|--------|-------|
| `400` | E-mail já cadastrado ou `roleId` inválido |
| `500` | Falha na comunicação com o KeyCloak admin |
