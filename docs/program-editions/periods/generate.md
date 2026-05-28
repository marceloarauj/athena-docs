---
sidebar_position: 1
---

# Gerar Períodos Automaticamente

Gera automaticamente os períodos letivos de uma edição com base no `PeriodType` definido no programa acadêmico (bimestral, semestral, anual etc.) e nas datas de início e fim da edição.

**Exemplo:** Para uma edição de 2026 com `PeriodType = Bimester`, serão gerados 4 bimestres automaticamente.

## Endpoint

```
POST /api/programedition/edition/{id}/generate-periods
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Exemplo de Requisição

```bash
curl -X POST http://localhost:5000/api/programedition/edition/a1b2c3d4-e5f6-7890-abcd-ef1234567890/generate-periods
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    { "id": "p1...", "number": 1, "name": "1° Bimestre", "startDate": "2026-02-02", "endDate": "2026-04-10" },
    { "id": "p2...", "number": 2, "name": "2° Bimestre", "startDate": "2026-04-13", "endDate": "2026-06-30" },
    { "id": "p3...", "number": 3, "name": "3° Bimestre", "startDate": "2026-08-03", "endDate": "2026-10-09" },
    { "id": "p4...", "number": 4, "name": "4° Bimestre", "startDate": "2026-10-12", "endDate": "2026-12-18" }
  ]
}
```
