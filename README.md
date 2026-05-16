# Client Clarity OS

Client Clarity OS is the master operating system for turning a client’s raw story, doctrine, offers, assets, and business reality into a structured blueprint that can be reviewed, priced, proposed, paid for, built, documented, and handed off cleanly.

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
→ Blueprint Review / Diagnosis Reveal
→ Proposal
→ Statement of Work
→ Signature / Acceptance
→ Stripe Payment
→ Build Tasks
→ Execution
→ Client Update Rhythm
→ Handover / Support / Expansion
```

## What This Repo Now Governs

Client Clarity OS now includes five connected layers:

1. **Client Clarity Intake OS** — founder/business extraction.
2. **Blueprint Extraction Layer** — doctrine, ICP, revenue leaks, first build.
3. **Close Protocol** — proposal, SOW, scope, payment, terms.
4. **Build Activation System** — payment-to-build launch, tasks, repos, source control.
5. **Handover & Support Doctrine** — clean transfer, support windows, internal IP protection.

## Current Stack

- **Airtable**: operational source of truth. Existing base: `AMA MOB OS V2`.
- **Notion**: client-facing intake, dossiers, and client OS spaces.
- **AI extraction**: drafts structured blueprint JSON from completed intake answers.
- **Stripe**: staged payment layer. Products/payment links remain human-reviewed and implemented as needed.
- **n8n / Make**: orchestration layer. Workflow specs live in this repo; production JSON can be wired when credentials are available.
- **GitHub**: doctrine of truth for specs, prompts, skills, handoffs, SOW standards, and durable operating memory.
- **Graphify**: persistent context layer. Scan and query repo/project folders before major structural decisions.
- **NotebookLM**: client update and briefing layer, especially for milestone podcasts and contextual progress summaries.

## Repo Map

```text
docs/                 Architecture, implementation plan, close protocol, terms doctrine, ingestion, pricing, sync maps
schemas/              Airtable table specs, Notion database specs, AI blueprint JSON schema
prompts/              AI extraction, Notion template, proposal, operator, close-protocol prompts
skills/               Reusable agent/operator skills
automations/n8n/      Workflow specs and environment map
scripts/              Local validation and slug helper scripts
clients/              Client-specific handoffs and notes
templates/            Legacy/working template notes kept for continuity
```

## Airtable Tables

Canonical Airtable base: `AMA MOB OS V2`.

- `Client Clarity OS - Clients`
- `Client Clarity OS - Intake Responses`
- `Client Clarity OS - Blueprint Outputs`
- `Client Clarity OS - Assets & Data Room`
- `Client Clarity OS - Build Tasks`
- `Client Clarity OS - Master Schema Reference`

Detailed table contracts live in [docs/airtable-schema.md](docs/airtable-schema.md) and `schemas/airtable/`.

## Notion Layer

Notion is the client-facing experience layer.

Current live environments include:

- `CLIENT CLARITY OS`
- `Howling Mūne OS`
- `Theo — Clarity Blueprint`
- `Shakti System OS`
- `Sheetal-Clarity Blueprint`
- `Graffiti Media Engine OS`

Templates must stay specific:

- Creator-Healer Intake for Theo-style clients.
- Shakti System Intake for Sheetal-style clients.
- Media Engine Intake for Shaun-style clients.
- Generic Client Blueprint as fallback.

## Intake Standard

The intake is not merely a form. It is:

```text
founder extraction
+
business telemetry
+
operational readiness capture
```

Every serious intake should collect:

- origin, authority, doctrine, philosophy
- ICP, offers, pricing, audience, current proof
- monthly revenue reality and referral dependency
- lead sources, conversion reality, capacity, bottlenecks
- assets/access needed
- support expectations
- handover expectations
- software/subscription sensitivity
- ownership/IP concerns
- performance targets discussion
- measurement readiness
- budget comfort
- final reflection

## Pricing Doctrine

Internally, even “basic” system builds should be treated as **$13K+ architecture packages** in market value. A client may pay less based on scope, strategic relationship, case-study value, or alignment structure, but the system should feel premium, disciplined, and more valuable than the fee.

We provide:
- system architecture
- founder/doctrine extraction
- ICP and offer lock
- front door / client pathway
- intake/application logic
- backend data layer
- close/follow-up language
- documentation and handoff

We do **not** automatically provide:
- voice agents
- autonomous enterprise workflows
- daily social media management
- paid ad operations
- unlimited revisions
- full brand redesign
- scope drift disguised as “small changes”
- advanced features outside the signed SOW

## Marketing Boundary

AMA / Hanzo builds systems, pathways, and operational foundations. We do **not** become the client’s general marketing department unless that is explicitly scoped, separately priced, and documented.

That means:
- we may design content rhythm and conversion pathways
- we may write launch or follow-up language
- we may create strategic messaging systems
- we do not guarantee organic traffic, client posting consistency, sales activity, media placement, or lead volume without a separately controlled/distributed campaign

## Core Operating Rules

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
- Airtable runs the machine. Notion holds the client-facing experience. GitHub preserves doctrine.
- Graphify should be queried before major structural decisions.
- NotebookLM may be used for milestone/update briefing podcasts when useful.
- No loose documents: route uploads, transcripts, emails, and artifacts into the proper client/project system.

## First Build Recommendation Logic

- Revenue exists but lead flow is weak → Front Door + Lead Flow System.
- Audience exists but offer is unclear → Offer Lock + Intake System.
- Doctrine exists but monetization is unclear → Foundation + Offer Ladder.
- Multiple directions are competing → One Door + Routing Logic.
- Client wants full OS too early → Phase 1 foundation first; defer expansion.

## Current Priority

The system is now moving into a sharper close and activation doctrine. Immediate documents to maintain inside this repo:

- `docs/close-protocol.md`
- `docs/build-activation-system.md`
- `docs/standard-terms-and-conditions.md`
- `docs/marketing-boundary-and-scope-lock.md`
- `docs/pricing-and-margin-discipline.md`
- `docs/document-ingestion-protocol.md`
- `docs/notebooklm-client-update-protocol.md`
- `docs/graphify-context-protocol.md`

These are not separate projects. They are modules inside Client Clarity OS.
