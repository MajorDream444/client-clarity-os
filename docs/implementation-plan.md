# Implementation Plan

## Stage 0 — Repo Scaffold

Status: built in this repo.

- Preserve the operating philosophy.
- Store Airtable, Notion, AI extraction, Stripe, and n8n contracts as versioned files.
- Add local validation scripts that do not call live APIs.
- Keep client archetypes separate.

## Stage 1 — Notion Intake Database

- Create `Client Clarity Intake` in Notion.
- Add properties from `schemas/notion/client-clarity-intake.database.json`.
- Add views: All Intakes, By Client Type, Incomplete, Ready for Review, Completed, Client Intake Form.
- Create template pages from the markdown templates in `schemas/notion/`.
- Confirm client-facing copy feels specific and premium.

## Stage 2 — Airtable Contract Verification

- Confirm all six canonical tables exist in `AMA MOB OS V2`.
- Map real table IDs into `.env`.
- Compare live fields against `schemas/airtable/*.table.json`.
- Update `Client Clarity OS - Master Schema Reference` for any field that is planned, mapped, built, or needs review.

## Stage 3 — AI Blueprint Extraction

- Use `prompts/ai-blueprint-extraction.md`.
- Return valid JSON only.
- Validate outputs with `scripts/validate-blueprint-json.js`.
- Store drafts in `Client Clarity OS - Blueprint Outputs`.
- Require Major/human review before proposal pricing or build execution.

## Stage 4 — n8n Workflow Wiring

- Build workflows from `automations/n8n/*.spec.md`.
- Use `.env` values and `automations/n8n/workflow-env-map.md`.
- Start with test records and dry-run logging.
- Do not enable production triggers until all writebacks are verified.

## Stage 5 — Stripe Payment Stages

- Create Stripe products/prices for Stage 1, Stage 2, and Stage 3.
- Add stage metadata to checkout/payment links.
- Wire webhook handling to update Airtable Payment Status.
- Keep final proposal terms human-reviewed.

## Stage 6 — Build Task Execution

- Convert approved blueprint `thirty_day_plan` entries into Build Tasks.
- Keep generated tasks staged, reviewable, and editable.
- Do not start fulfillment until Stage 1 payment and human approval are confirmed.

## First Live Implementation Example — Theo / Howling Mune

Status: dedicated implementation scaffold created at:

```text
/Users/majordreamwilliams/Desktop/theo-howling-mune-client-flow-engine
```

Theo / Howling Mune is the first concrete V1 client implementation of this OS loop. The dedicated project owns the client-specific front door, intake routing, CRM fields, close flow, prompts, schemas, source index, and automation specs.

This generic repo remains the reusable Client Clarity OS spine. The Theo repo is the live client layer that proves the loop:

```text
Client record -> Intake/source material -> Blueprint extraction -> Human review
-> Proposal/SOW -> Stripe payment -> Build tasks -> Front door/intake/CRM
-> Launch and optimization
```

Do not copy Theo-specific doctrine into generic templates unless it is explicitly generalized. Keep Sheetal, Shaun, and Theo language separate.
