---
sidebar_position: 1
---

# Criar Edição de Programa

Cria uma nova edição de um programa acadêmico. Uma **Edição** representa a realização concreta de um programa em um período específico (ex: "Ensino Médio 2026"). Cada edição passa por etapas: currículo → matrículas → períodos → calendário → grade horária → publicação.

## Endpoint

```
POST /api/programedition
Content-Type: application/json
```

## Request Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `academicProgramId` | `guid` | ✅ | ID do programa acadêmico base |
| `name` | `string` | ✅ | Nome desta edição. Ex: `"Ensino Médio 2026"` |
| `startDate` | `date` | ✅ | Data de início (`YYYY-MM-DD`) |
| `endDate` | `date` | ✅ | Data de encerramento (`YYYY-MM-DD`) |

## Exemplo de Requisição

```json
{
  "academicProgramId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "name": "Ensino Médio 2026",
  "startDate": "2026-02-02",
  "endDate": "2026-12-18"
}
```

## Resposta de Sucesso

**Status:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "academicProgramId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "Ensino Médio 2026",
    "startDate": "2026-02-02",
    "endDate": "2026-12-18",
    "status": "Draft"
  }
}
```
