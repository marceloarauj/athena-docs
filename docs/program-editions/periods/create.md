---
sidebar_position: 2
---

# Criar Período Manual

Cria um período letivo manualmente em uma edição. Use quando o calendário não se encaixa no padrão automático (ex: módulos com durações irregulares).

## Endpoint

```
POST /api/programedition/edition/{id}/periods
Content-Type: application/json
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `number` | `integer` | ✅ | Número do período (ex: `1`, `2`) |
| `name` | `string` | ✅ | Nome do período. Ex: `"Módulo Intensivo"` |
| `startDate` | `date` | ✅ | Data de início (`YYYY-MM-DD`) |
| `endDate` | `date` | ✅ | Data de fim (`YYYY-MM-DD`) |

## Exemplo de Requisição

```json
{
  "number": 1,
  "name": "Módulo Intensivo",
  "startDate": "2026-03-01",
  "endDate": "2026-04-30"
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "g7h8i9j0-k1l2-3456-ghij-567890123456",
    "number": 1,
    "name": "Módulo Intensivo",
    "startDate": "2026-03-01",
    "endDate": "2026-04-30"
  }
}
```
