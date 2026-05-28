---
sidebar_position: 1
---

# Checklist de Publicação

Verifica se a edição atende a todos os requisitos para ser publicada. Retorna uma lista de itens com o status de cada verificação (OK ou pendente). Use antes de publicar para identificar o que ainda precisa ser configurado.

**Itens verificados:**
- Currículo configurado
- Alunos matriculados
- Períodos criados
- Calendário gerado
- Grupos de aula criados com alunos distribuídos
- Grade horária gerada
- Nenhum conflito crítico

## Endpoint

```
POST /api/programedition/edition/{id}/publish-checklist
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Exemplo de Requisição

```bash
curl -X POST http://localhost:5000/api/programedition/edition/a1b2.../publish-checklist
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "canPublish": false,
    "items": [
      { "name": "Currículo", "passed": true, "message": null },
      { "name": "Matrículas", "passed": true, "message": null },
      { "name": "Períodos", "passed": true, "message": null },
      { "name": "Calendário", "passed": true, "message": null },
      { "name": "Grupos de Aula", "passed": true, "message": null },
      { "name": "Grade Horária", "passed": false, "message": "Grade ainda não foi gerada" },
      { "name": "Conflitos", "passed": false, "message": "2 conflitos críticos pendentes" }
    ]
  }
}
```
