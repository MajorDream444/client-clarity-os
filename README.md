# Client Clarity Intake OS

Client Clarity Intake OS is a repeatable onboarding workflow that turns a client's raw story, doctrine, offers, assets, and business reality into a structured blueprint that can be reviewed, priced, proposed, paid for, and built.

The operating principle:

> Do not build before extracting clarity.

This repo is the implementation spine for AMA / Hanzo client-facing builds. It stores the docs, schemas, prompts, skills, workflow specs, helper scripts, and client handoff notes that let Codex, Claude, and local agents execute the system in stages without inventing the architecture from scratch.

## Core Workflow

```text
Client
→ Intake
→ Notion
→ Airtable
→ AI Blueprint
→ Human Review
→ Proposal
→ Stripe Payment
→ Build Tasks
→ Execution
```

## Current Stack

- **Airtable**: operational source of truth. Existing base: `AMA MOB OS V2`.
- **Notion**: client-facing intake and dossier layer. Production database target: `Client Clarity Intake`.
- **AI extraction**: drafts structured blueprint JSON from completed intake answers.
- **Stripe**: staged payment layer. Products/payment links are not implemented yet.
- **n8n / Make**: future orchestration layer. Workflow specs exist in this repo; production JSON is not wired yet.
- **GitHub**: repo-managed source for prompts, specs, skills, schemas, and helper scripts.

## Repo Map

```text
docs/                 Architecture, implementation plan, schema docs, sync maps, testing checklist
schemas/              Airtable table specs, Notion database spec, AI blueprint JSON schema
prompts/              AI extraction, Notion template, proposal, and operator prompts
skills/               Reusable agent/operator skills
automations/n8n/      Workflow specs and environment map
scripts/              Local validation and slug helper scripts
clients/              Client-specific handoffs and notes
templates/            Legacy/working template notes kept for continuity
```

## Setup

1. Copy `.env.example` to `.env`.
2. Fill Airtable, Notion, OpenAI, Stripe, Telegram, and app URL values.
3. Keep secrets local. Do not commit `.env`.
4. Run the environment check:

```bash
node scripts/validate-env.js
```

5. Validate a blueprint JSON file:

```bash
node scripts/validate-blueprint-json.js path/to/blueprint-output.json
```

6. Generate a stable client slug:

```bash
node scripts/generate-client-slug.js "Sheetal Kandola" "Shakti System Foundation"
```

## Required Environment Variables

See [.env.example](.env.example). All Airtable table IDs, Notion database/page IDs, Stripe prices, and webhook secrets must come from environment variables. The repo does not assume table IDs or hardcode secrets.

## Airtable Tables

Canonical Airtable base: `AMA MOB OS V2`.

- `Client Clarity OS - Clients`
- `Client Clarity OS - Intake Responses`
- `Client Clarity OS - Blueprint Outputs`
- `Client Clarity OS - Assets & Data Room`
- `Client Clarity OS - Build Tasks`
- `Client Clarity OS - Master Schema Reference`

Detailed table contracts live in [docs/airtable-schema.md](docs/airtable-schema.md) and `schemas/airtable/`.

## Notion Target

Production database target: `Client Clarity Intake`.

Notion is the client-facing experience layer. Templates must stay specific:

- Creator-Healer Intake for Theo-style clients.
- Shakti System Intake for Sheetal-style clients.
- Media Engine Intake for Shaun-style clients.
- Generic Client Blueprint as fallback.

See [docs/notion-schema.md](docs/notion-schema.md) and `schemas/notion/`.

## Workflow Order

1. `01-client-intake-setup`: Airtable client record creates the Notion intake page.
2. `02-intake-sync`: submitted Notion intake syncs into Airtable.
3. `03-blueprint-generator`: AI drafts JSON, Airtable blueprint output, Notion dossier, and build tasks.
4. `04-stripe-payment-status`: Stripe payment events update Airtable stage/payment state.

Workflow specs live in `automations/n8n/`.

## Manual Test Path

Use [docs/testing-checklist.md](docs/testing-checklist.md) as the acceptance checklist. The short path is:

1. Create a test Airtable client.
2. Confirm Notion intake creation and URL writeback.
3. Submit a Notion intake.
4. Confirm Airtable intake response sync.
5. Run AI extraction and JSON validation.
6. Confirm blueprint output, build tasks, Stripe test payment update, and notification.

## Not Yet Automated

- Production Notion database creation.
- Airtable table ID discovery.
- Stripe staged products/payment links.
- Live n8n workflow JSON import.
- Live OpenAI extraction calls.
- Telegram/operator notification delivery.
- Proposal pricing and final terms. These remain human-reviewed.

## Operating Rules

- Do not overbuild.
- Clarity before scale.
- Separate doctrine from offer.
- Separate long-term vision from first build.
- Always identify what already makes money.
- Always identify where leads come from now.
- Always identify the biggest revenue leak.
- Always include what should not be built yet.
- AI drafts. Human approves.
- Pricing and final proposal terms remain human-reviewed.
- Airtable runs the machine. Notion holds the client-facing experience.

## First Build Recommendation Logic

- Revenue exists but lead flow is weak → Front Door + Lead Flow System.
- Audience exists but offer is unclear → Offer Lock + Intake System.
- Doctrine exists but monetization is unclear → Foundation + Offer Ladder.
- Multiple directions are competing → One Door + Routing Logic.
- Client wants full OS too early → Phase 1 foundation first; defer expansion.
