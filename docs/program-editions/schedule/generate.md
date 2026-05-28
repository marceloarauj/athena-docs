---
sidebar_position: 1
---

# Gerar Grade Horária

Gera automaticamente a grade horária da edição, distribuindo as matérias do currículo entre os grupos de aula, professores e slots de horário disponíveis, respeitando a disponibilidade dos professores e as restrições de sala.

**Pré-requisitos:**
- Grupos de aula criados com alunos distribuídos
- Currículo configurado com horas semanais
- Professores com disponibilidade e matérias definidas
- Turnos com slots de horário cadastrados

## Endpoint

```
POST /api/programedition/edition/{id}/generate-schedule
```

## Path Parameters

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `id` | `guid` | ID da edição |

## Exemplo de Requisição

```bash
curl -X POST http://localhost:5000/api/programedition/edition/a1b2.../generate-schedule
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "status": "Completed",
    "slotsGenerated": 120,
    "conflictsDetected": 0
  }
}
```
