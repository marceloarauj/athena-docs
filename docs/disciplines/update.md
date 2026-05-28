---
sidebar_position: 2
---

# Atualizar Disciplina

Atualiza os dados de uma disciplina existente. Campos não enviados permanecem inalterados.

## Endpoint

```
PUT /api/discipline/{id}
Content-Type: application/json
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da disciplina |

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `name` | `string` | ❌ | Novo nome |
| `studyHours` | `integer` | ❌ | Nova carga horária |
| `credits` | `integer` | ❌ | Novo número de créditos |
| `available` | `boolean` | ❌ | Disponibilidade da disciplina |
| `chargePayment` | `boolean` | ❌ | Se cobra separadamente |

## Exemplo de Requisição

```json
{
  "studyHours": 100,
  "available": true
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "name": "Matemática",
    "studyHours": 100,
    "credits": 4,
    "available": true
  }
}
```
