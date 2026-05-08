# Architecture

## Purpose

Client Clarity Intake OS turns unstructured client context into a reviewed, priced, paid, and executable build plan.

## System Flow

```text
Client
-> Notion intake
-> Airtable intake response
-> AI blueprint draft
-> Human review
-> Proposal
-> Stripe payment
-> Airtable build tasks
-> Execution
```

## Layer Responsibilities

| Layer | Responsibility | Source of Truth |
| --- | --- | --- |
| Notion | Client-facing intake, long-form answers, dossier pages | Client experience |
| Airtable | CRM, statuses, outputs, assets, build tasks, payment stages | Operations |
| AI | Blueprint draft extraction | Prompt + JSON schema |
| Human Review | Approval, pricing, proposal terms, build readiness | Major/operator |
| Stripe | Staged payments and payment status | Stripe + Airtable status |
| n8n / Make | Sync and orchestration | Workflow specs |
| GitHub | Versioned schemas, docs, prompts, skills, scripts | This repo |

## Invariants

- Airtable is the operational source of truth.
- Notion is the client-facing experience layer.
- AI drafts only; it does not approve, price, or promise.
- Build tasks must come from approved blueprint outputs.
- Client matching must use stable slugs or record IDs, not fuzzy names alone.
- Secrets, table IDs, price IDs, and database IDs come from environment variables.
