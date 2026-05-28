---
sidebar_position: 3
---

# Atualizar Variável de Avaliação

Define a expressão booleana usada para calcular se um aluno foi aprovado. A expressão usa variáveis nomeadas (ex: `A`, `B`) que representam notas, e é avaliada via **NCalc** em tempo de execução.

**Exemplos de expressões válidas:**
- `"A >= 5 && B >= 6"` — aprovado se nota A ≥ 5 e nota B ≥ 6
- `"(A + B) / 2 >= 7"` — aprovado se a média for ≥ 7
- `"A >= 6 || (A >= 5 && Recuperacao >= 7)"` — aprovado se A ≥ 6 ou se teve recuperação

## Endpoint

```
PUT /api/institution/{alias}/evaluation-variable
Content-Type: application/json
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `alias` | `string` | Alias da instituição |

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `expression` | `string` | ✅ | Expressão booleana NCalc para aprovação |
| `variables` | `string[]` | ✅ | Lista de nomes das variáveis usadas na expressão |

## Exemplo de Requisição

```json
{
  "expression": "A >= 5 && B >= 6",
  "variables": ["A", "B"]
}
```

```bash
curl -X PUT http://localhost:5000/api/institution/colegio-athena/evaluation-variable \
  -H "Content-Type: application/json" \
  -d '{"expression": "A >= 5 && B >= 6", "variables": ["A", "B"]}'
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "alias": "colegio-athena",
    "expression": "A >= 5 && B >= 6",
    "variables": ["A", "B"]
  }
}
```

## Erros Comuns

| Código | Causa |
|--------|-------|
| `400` | Expressão inválida ou variáveis não encontradas na expressão |
| `404` | Instituição com o alias fornecido não encontrada |
