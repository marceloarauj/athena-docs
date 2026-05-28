---
sidebar_position: 4
---

# Detectar Conflitos na Grade

Executa a análise de conflitos na grade horária gerada. Identifica situações como: professor alocado em duas turmas no mesmo horário, sala com mais de um grupo no mesmo slot, e alunos com sobreposição de horários.

## Endpoint

```
POST /api/programedition/edition/{id}/conflict-detection
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Exemplo de Requisição

```bash
curl -X POST http://localhost:5000/api/programedition/edition/a1b2.../conflict-detection
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "totalConflicts": 2,
    "criticalConflicts": 1,
    "analysisCompletedAt": "2026-05-24T10:00:00Z"
  }
}
```
