# Client Clarity Intake OS — Project Handover

Client Clarity Intake OS is a repeatable onboarding and diagnosis system for client-facing business builds.

Its job is to take a client from raw conversation, scattered vision, and unstructured ideas into a clear operating blueprint that can become a proposal, paid build, Notion dossier, Airtable CRM record, lead system, build roadmap, and future operating system.

The core principle:

> Do not build before extracting clarity.

## Core Workflow

```text
Client Conversation
↓
Client Intake
↓
Notion Interactive Questionnaire
↓
Airtable Backend Sync
↓
AI Blueprint Extraction
↓
Human Review
↓
Proposal / SOW
↓
Payment
↓
Build Execution
↓
Ongoing Optimization
```

## Proven Archetypes

### Theo — Creator-Healer OS
Use for founder-led healing, coaching, personal transformation, and community pathways.

### Sheetal — Shakti System OS
Use for Shakti, Tantra, somatics, retreat, feminine sovereignty, community, and sanctuary-centered work.

### Shaun — Graffiti Media Engine
Use for media, PR, cultural storytelling, white-label media engines, IP, and fundability.

## Current Implementation State

- Airtable base exists: `AMA MOB OS V2`.
- Airtable tables exist and are documented in `docs/airtable-schema.md`.
- Notion production database still needs to be built: `Client Clarity Intake`.
- Stripe staged products/payment links still need to be implemented.
- n8n production workflow JSON still needs to be wired from the specs in `automations/n8n/`.
- This repo is the source for schemas, prompts, workflow specs, skills, docs, and helper scripts.

## System Layers

- Notion: client-facing experience layer.
- Airtable: operational source of truth.
- AI Extraction: blueprint generation layer.
- Human Review: strategic approval layer.
- Stripe: staged payment layer.
- GitHub: reusable source-of-truth layer.
- n8n / Make: automation layer.

## Agent Stop Rules

- Do not hardcode secrets or table IDs.
- Do not call live APIs from this scaffold pass.
- Do not invent intake facts, pricing, claims, or client proof.
- Do not merge Sheetal, Theo, and Shaun language into one generic template.
- Do not create approval, payment, or execution actions without human review gates.

## Master Rule

We do not build dead assets. We build living systems that capture clarity, generate data, and move clients toward revenue.
