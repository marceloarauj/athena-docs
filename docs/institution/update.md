---
sidebar_position: 2
---

# Atualizar Instituição

Atualiza as informações de uma instituição existente. Permite alterar dados cadastrais, cores da marca e logo. O alias identifica qual instituição será atualizada.

## Endpoint

```
PUT /api/institution/{alias}
Content-Type: multipart/form-data
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `alias` | `string` | Alias único da instituição |

## Request Body (form-data)

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `displayName` | `string` | ❌ | Novo nome de exibição |
| `isPrivate` | `boolean` | ❌ | Atualiza visibilidade |
| `chargePayment` | `boolean` | ❌ | Atualiza cobrança |
| `paymentFormat` | `PaymentFormat` | ❌ | Novo formato de pagamento |
| `taxDocument` | `string` | ❌ | Documento fiscal |
| `logo` | `file` | ❌ | Nova logo (substitui a atual no S3) |
| `primaryColor` | `string` | ❌ | Nova cor primária |
| `secondaryColor` | `string` | ❌ | Nova cor secundária |
| `dangerColor` | `string` | ❌ | Nova cor de alerta |

## Exemplo de Requisição

```bash
curl -X PUT http://localhost:5000/api/institution/colegio-athena \
  -F "displayName=Colégio Athena Premium" \
  -F "primaryColor=#5B21B6"
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "alias": "colegio-athena",
    "displayName": "Colégio Athena Premium",
    "isPrivate": true,
    "chargePayment": true,
    "paymentFormat": "Monthly",
    "logoUrl": "https://s3.../institutions/colegio-athena/logo.png"
  }
}
```
