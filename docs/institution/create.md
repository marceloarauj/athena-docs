---
sidebar_position: 1
---

# Criar Instituição

Cadastra uma nova instituição na plataforma. Uma instituição é a entidade raiz que agrupa todos os programas acadêmicos, turmas, professores e alunos. Cada instituição recebe um **alias** único que é usado para identificá-la em todas as requisições subsequentes.

## Endpoint

```
POST /api/institution
Content-Type: multipart/form-data
```

## Request Body (form-data)

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `alias` | `string` | ✅ | Identificador único da instituição (slug). Ex: `colégio-athena` |
| `displayName` | `string` | ✅ | Nome exibido publicamente |
| `isPrivate` | `boolean` | ✅ | Se a instituição é privada |
| `chargePayment` | `boolean` | ✅ | Se cobra mensalidade |
| `paymentFormat` | `PaymentFormat` | ✅ | Formato de cobrança: `Monthly`, `Yearly`, `OneTime`, `Free` |
| `taxDocument` | `string` | ❌ | CNPJ ou CPF da instituição |
| `saveUpdateHistory` | `boolean` | ❌ | Habilita histórico de alterações (default: false) |
| `logo` | `file` | ❌ | Arquivo de imagem da logo (enviado para S3) |
| `primaryColor` | `string` | ❌ | Cor primária em hex. Ex: `#7C3AED` |
| `secondaryColor` | `string` | ❌ | Cor secundária em hex |
| `dangerColor` | `string` | ❌ | Cor de alerta em hex |

## Exemplo de Requisição

```bash
curl -X POST http://localhost:5000/api/institution \
  -F "alias=colegio-athena" \
  -F "displayName=Colégio Athena" \
  -F "isPrivate=true" \
  -F "chargePayment=true" \
  -F "paymentFormat=Monthly" \
  -F "taxDocument=12.345.678/0001-99" \
  -F "primaryColor=#7C3AED"
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "alias": "colegio-athena",
    "displayName": "Colégio Athena",
    "isPrivate": true,
    "chargePayment": true,
    "paymentFormat": "Monthly",
    "saveUpdateHistory": false,
    "taxDocument": "12.345.678/0001-99"
  }
}
```

## Erros Comuns

| Código | Causa |
|--------|-------|
| `400` | Alias já em uso ou campos obrigatórios ausentes |
| `500` | Falha ao fazer upload da logo para o S3 |
