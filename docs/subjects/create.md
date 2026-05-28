---
sidebar_position: 1
---

# Criar Matéria

Cadastra uma matéria (subject) vinculada a um programa acadêmico. Uma **Matéria** é a unidade básica do currículo (ex: Matemática do Ensino Médio, Algoritmos da Graduação em TI). É diferente de Disciplina: a Disciplina é a instância concreta de uma matéria em uma turma.

## Endpoint

```
POST /api/subject
Content-Type: application/json
```

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `academicProgramId` | `guid` | ✅ | ID do programa acadêmico ao qual a matéria pertence |
| `name` | `string` | ✅ | Nome da matéria. Ex: `"Matemática"` |
| `code` | `string` | ✅ | Código da matéria. Ex: `"MAT-01"` |

## Exemplo de Requisição

```json
{
  "academicProgramId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "name": "Matemática",
  "code": "MAT-01"
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "sub1-guid...",
    "academicProgramId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "Matemática",
    "code": "MAT-01"
  }
}
```
