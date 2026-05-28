---
sidebar_position: 4
---

# Pré-visualizar Promoção

Simula a promoção de alunos de uma edição de origem para uma edição de destino, sem confirmar a operação. Retorna quais alunos seriam promovidos, reprovados ou precisariam de ação manual.

## Endpoint

```
GET /api/programedition/edition/{id}/promotion/preview
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição de **origem** |

## Query Parameters

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `targetEditionId` | `guid` | ✅ | ID da edição de **destino** |

## Exemplo de Requisição

```bash
curl "http://localhost:5000/api/programedition/edition/a1b2.../promotion/preview?targetEditionId=b2c3..."
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "toPromote": [
      { "enrollmentId": "...", "studentName": "João Silva", "reason": "Aprovado em todos os períodos" }
    ],
    "toRetain": [
      { "enrollmentId": "...", "studentName": "Maria Souza", "reason": "Reprovado no 3° Bimestre" }
    ],
    "requiresManualAction": []
  }
}
```
