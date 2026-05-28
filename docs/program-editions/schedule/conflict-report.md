---
sidebar_position: 5
---

# Relatório de Conflitos

Retorna o relatório detalhado de conflitos detectados na grade horária, com a severidade e a descrição de cada conflito.

## Endpoint

```
GET /api/programedition/edition/{id}/conflict-report
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Exemplo de Requisição

```bash
curl http://localhost:5000/api/programedition/edition/a1b2.../conflict-report
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": "cf1-...",
      "severity": "High",
      "description": "Prof. Carlos alocado em 1° Ano A e 1° Ano B simultaneamente na Segunda às 07:30",
      "affectedEntities": ["prof-carlos-id", "cg1-id", "cg2-id"]
    },
    {
      "id": "cf2-...",
      "severity": "Medium",
      "description": "Sala 101 com dois grupos no mesmo horário na Terça às 09:30",
      "affectedEntities": ["sala101-id", "cg1-id", "cg3-id"]
    }
  ]
}
```
