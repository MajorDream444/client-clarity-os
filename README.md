# Client Clarity Intake OS

Client Clarity Intake OS is a repeatable client onboarding and diagnosis system for turning raw client conversations into structured business blueprints, proposals, build tasks, and operating systems.

The core principle:

> Do not build before extracting clarity.

This repo is the reusable system spine for AMA / Hanzo client-facing builds. Sheetal and Shaun are active archetype clients, but the workflow is designed as a standard process for future creator-healers, retreat leaders, media operators, consultants, athletes, creators, local businesses, and founder-led brands.

## Core Workflow

```text
Client Conversation
→ Client Record in Airtable
→ Template Type Selected
→ Notion Intake Page Created
→ Client Completes Intake
→ Intake Syncs Back to Airtable
→ AI Blueprint Extraction
→ Human Review
→ Proposal / SOW
→ Stripe Payment
→ Build Tasks
→ Execution
→ Optimization
```

## System Roles

- **Notion**: client-facing intake, long-form answers, asset checklist, dossier pages.
- **Airtable**: CRM, status tracking, blueprint outputs, assets, build tasks, deal/payment stage.
- **AI Extraction**: turns completed intake responses into structured blueprint JSON.
- **Stripe**: staged payments and payment confirmation.
- **GitHub**: reusable skills, templates, prompts, workflow specs, schema docs, implementation source.
- **n8n / Make**: automation layer for syncing, extraction, logging, and notifications.
- **Gamma / document builder**: polished client-facing PDFs, proposal docs, and visual decks after human approval.

## Repo Map

```text
docs/                 Architecture, schemas, workflows, Stripe and proposal docs
skills/               Reusable AI/operator skills
prompts/              AI extraction and generation prompts
templates/            Notion, Airtable, and proposal templates
automations/n8n/      n8n workflow specs and JSON placeholders
clients/              Client-specific handoffs and intake templates
```

## Current Archetypes

- **Sheetal — Shakti System OS**: wellness, retreat, doctrine, somatics, feminine sovereignty, community, sanctuary pathway.
- **Shaun — Graffiti Media Engine**: media/PR, cultural authority, white-label revenue engine, IP, fundability, acquisition path.

## Sacred Operating Rules

- Do not overbuild.
- Separate doctrine from offer.
- Separate long-term vision from first build.
- Always identify what already makes money.
- Always identify where leads come from now.
- Always identify the biggest revenue leak.
- Always include what should not be built yet.
- AI drafts. Human approves.
- Airtable runs the machine. Notion holds the client experience.

## First Build Recommendation Logic

- Revenue exists but lead flow is weak → Front Door + Lead Flow System.
- Audience exists but offer is unclear → Offer Lock + Intake System.
- Doctrine exists but monetization is unclear → Foundation + Offer Ladder.
- Multiple directions are competing → One Door + Routing Logic.
- Client wants full OS too early → Phase 1 foundation first; defer expansion.
