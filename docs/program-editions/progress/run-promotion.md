---
sidebar_position: 5
---

# Executar Promoção

Promove os alunos aprovados de uma edição de origem para uma edição de destino. Os alunos promovidos são automaticamente matriculados na edição seguinte com o próximo ano/série.

**Atenção:** Esta operação é irreversível. Recomenda-se usar o endpoint de [pré-visualização](./promotion-preview) antes.

## Endpoint

```
POST /api/programedition/edition/{id}/promotion/run
Content-Type: application/json
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição de **origem** |

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `targetEditionId` | `guid` | ✅ | ID da edição de **destino** |

## Exemplo de Requisição

```json
{
  "targetEditionId": "b2c3d4e5-f6a7-8901-bcde-f12345678901"
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "promoted": 28,
    "retained": 4,
    "errors": []
  }
}
```
