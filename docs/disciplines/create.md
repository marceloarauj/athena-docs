---
sidebar_position: 1
---

# Criar Disciplina

Cadastra uma nova disciplina na instituição. Uma **Disciplina** representa um componente curricular (ex: Matemática, Português, Programação Web). Cada disciplina pode ter tópicos de conteúdo associados e é vinculada a turmas e professores.

## Endpoint

```
POST /api/discipline
Content-Type: application/json
```

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `name` | `string` | ✅ | Nome da disciplina. Ex: `"Matemática"` |
| `studyHours` | `integer` | ✅ | Carga horária total em horas |
| `credits` | `integer` | ✅ | Número de créditos da disciplina |
| `chargePayment` | `boolean` | ✅ | Se a disciplina é cobrada separadamente |
| `topics` | `Topic[]` | ❌ | Lista de tópicos do conteúdo programático |

### Objeto `Topic`

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `content` | `string` | ✅ | Descrição do tópico |
| `lessonNumber` | `integer` | ✅ | Número da aula onde o tópico é abordado |

## Exemplo de Requisição

```json
{
  "name": "Matemática",
  "studyHours": 80,
  "credits": 4,
  "chargePayment": false,
  "topics": [
    { "lessonNumber": 1, "content": "Conjuntos numéricos" },
    { "lessonNumber": 2, "content": "Funções do 1° grau" }
  ]
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "name": "Matemática",
    "studyHours": 80,
    "credits": 4,
    "chargePayment": false,
    "available": true,
    "topics": [
      { "lessonNumber": 1, "content": "Conjuntos numéricos" },
      { "lessonNumber": 2, "content": "Funções do 1° grau" }
    ]
  }
}
```
