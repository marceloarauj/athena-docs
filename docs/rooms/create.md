---
sidebar_position: 1
---

# Criar Sala

Cadastra uma sala física da instituição. As salas são usadas na alocação de grupos de aula na grade horária.

## Endpoint

```
POST /api/room
Content-Type: application/json
```

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `name` | `string` | ✅ | Nome/código da sala. Ex: `"Sala 101"`, `"Lab. Informática"` |
| `capacity` | `integer` | ✅ | Capacidade máxima de alunos |
| `hasLab` | `boolean` | ❌ | Se a sala tem equipamentos de laboratório (default: `false`) |

## Exemplo de Requisição

```json
{
  "name": "Sala 101 - Bloco A",
  "capacity": 40,
  "hasLab": false
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "r1-guid...",
    "name": "Sala 101 - Bloco A",
    "capacity": 40,
    "hasLab": false
  }
}
```
