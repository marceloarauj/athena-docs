---
sidebar_position: 2
---

# Listar Eventos

Retorna os eventos da instituição, com filtros opcionais por nome e período.

## Endpoint

```
GET /api/event
```

## Query Parameters

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `name` | `string` | ❌ | Filtra por nome (busca parcial) |
| `startDate` | `datetime` | ❌ | Filtra eventos que começam a partir desta data |
| `endDate` | `datetime` | ❌ | Filtra eventos que terminam até esta data |

## Exemplo de Requisição

```bash
curl "http://localhost:5000/api/event?startDate=2026-04-01"
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
      "name": "Semana de Provas - 1° Bimestre",
      "description": "Período de avaliações do primeiro bimestre",
      "startDate": "2026-04-06T00:00:00Z",
      "endDate": "2026-04-10T23:59:00Z"
    }
  ]
}
```
