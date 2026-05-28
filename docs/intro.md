---
id: intro
slug: /intro
sidebar_position: 1
---

# Institution API

API REST para gerenciamento de instituições educacionais dentro da plataforma **Athena Students Union**.

## Visão Geral

A Institution API permite que plataformas educacionais configurem e gerenciem toda a estrutura de uma instituição: programas acadêmicos, edições, matrículas, grade horária, chamadas, avaliações e mais.

## Base URL

```
http://localhost:5000/api
```

## Autenticação

O header `Institution-Alias` identifica a instituição em cada requisição. O middleware `InstitutionMiddleware` resolve o contexto automaticamente.

## Formato de Resposta

Todas as respostas seguem o envelope `AthenaApiResponse`:

```json
{
  "success": true,
  "data": { },
  "error": null
}
```

Em caso de erro:

```json
{
  "success": false,
  "data": null,
  "error": "Mensagem descritiva do erro"
}
```

## Swagger / OpenAPI

O esquema OpenAPI está disponível em:

- **Runtime (dev):** `GET /openapi/v1.json`
- **UI interativa:** `GET /scalar` (tema Purple)
- **Arquivo estático:** `static/swagger/v1.json` (gerado via `dotnet build`)

## Enums Principais

| Enum | Valores |
|------|---------|
| `PaymentFormat` | `Monthly`, `Yearly`, `OneTime`, `Free` |
| `ProgramType` | `School (1)`, `Course (2)`, `PostGraduate (3)` |
| `PeriodType` | `Annual (0)`, `Bimester (1)`, `Trimester (2)`, `Semester (3)`, `Module (4)` |
| `EnrollmentStatus` | `Active (1)`, `Suspended (2)`, `Completed (3)`, `Cancelled (4)` |
| `WeekDays` | `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday` |
| `ProgressStatus` | `Approved`, `Failed`, `InProgress` |
| `EditionStatus` | `Draft`, `Published`, `Closed` |
| `CalendarDayType` | `SchoolDay`, `Holiday`, `Recess`, `Weekend` |
| `HolidayType` | `National`, `Regional`, `Local` |
| `ConflictSeverity` | `Low`, `Medium`, `High` |
| `GenerationStatus` | `Pending`, `Running`, `Completed`, `Failed` |
