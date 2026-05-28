---
sidebar_position: 1
---

# Criar Evento

Cadastra um evento no calendário da instituição (ex: Semana de Provas, Feira de Ciências, Formatura). Eventos são exibidos no calendário e podem impactar o planejamento de aulas.

## Endpoint

```
POST /api/event
Content-Type: application/json
```

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `name` | `string` | ✅ | Nome do evento |
| `description` | `string` | ❌ | Descrição do evento |
| `startDate` | `datetime` | ✅ | Data e hora de início |
| `endDate` | `datetime` | ✅ | Data e hora de fim |

## Exemplo de Requisição

```json
{
  "name": "Semana de Provas - 1° Bimestre",
  "description": "Período de avaliações do primeiro bimestre",
  "startDate": "2026-04-06T00:00:00Z",
  "endDate": "2026-04-10T23:59:00Z"
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    "name": "Semana de Provas - 1° Bimestre",
    "description": "Período de avaliações do primeiro bimestre",
    "startDate": "2026-04-06T00:00:00Z",
    "endDate": "2026-04-10T23:59:00Z"
  }
}
```
