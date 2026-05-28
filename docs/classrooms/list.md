---
sidebar_position: 2
---

# Listar Turmas

Retorna todas as turmas da instituição, com suporte a filtros opcionais por disciplina, professor e período.

## Endpoint

```
GET /api/classroom
```

## Query Parameters

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `disciplineId` | `guid` | ❌ | Filtra turmas de uma disciplina específica |
| `teacherId` | `guid` | ❌ | Filtra turmas de um professor específico |
| `startDate` | `datetime` | ❌ | Filtra turmas que começam a partir desta data |
| `endDate` | `datetime` | ❌ | Filtra turmas que encerram até esta data |

## Exemplo de Requisição

```bash
curl "http://localhost:5000/api/classroom?disciplineId=a1b2c3d4-e5f6-7890-abcd-ef1234567890"
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": "c3d4e5f6-a7b8-9012-cdef-123456789012",
      "disciplineId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "disciplineName": "Matemática",
      "teacherId": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
      "location": "Sala 101 - Bloco A",
      "startDate": "2026-02-03T07:00:00Z",
      "endDate": "2026-06-30T12:00:00Z",
      "maxStudents": 35,
      "isActive": true
    }
  ]
}
```
