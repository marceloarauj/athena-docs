---
sidebar_position: 2
---

# Publicar Edição

Publica a edição de programa, tornando-a ativa para alunos e professores. Após a publicação, o status muda para `Published` e a grade horária e calendário ficam disponíveis para consulta pelos usuários da plataforma.

**Atenção:** Use o [checklist de publicação](./publish-checklist) antes para garantir que todos os requisitos estão atendidos.

## Endpoint

```
POST /api/programedition/edition/{id}/publish
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Exemplo de Requisição

```bash
curl -X POST http://localhost:5000/api/programedition/edition/a1b2.../publish
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "status": "Published",
    "publishedAt": "2026-01-31T10:00:00Z"
  }
}
```

## Erros Comuns

| Código | Causa |
|--------|-------|
| `400` | Checklist de publicação não passou (itens pendentes) |
| `400` | Edição já publicada |
