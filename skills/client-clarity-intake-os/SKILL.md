# Skill: Client Clarity Intake OS

## Purpose

Create a repeatable client onboarding workflow that connects Notion, Airtable, AI extraction, proposals, payments, and build execution.

## Core Workflow

Client → Intake → Notion → Airtable → AI Blueprint → Human Review → Proposal → Stripe Payment → Build Tasks → Execution

## Tools

- Notion
- Airtable
- Stripe
- GitHub
- n8n / Make

## Rules

- Do not overbuild.
- Clarity before scale.
- Separate doctrine from offer.
- Separate long-term vision from first build.
- Always identify what already makes money.
- Always identify the biggest revenue leak.
- Always identify what should not be built yet.
- AI drafts. Human approves.
- Notion is the client-facing experience layer.
- Airtable is the operational source of truth.
- Stripe handles staged payment status only.
- n8n / Make handles sync and orchestration.
- Do not hardcode secrets or table IDs.

## Repo Contracts

- Airtable schemas: `schemas/airtable/`
- Notion database and templates: `schemas/notion/`
- Blueprint JSON schema: `schemas/extraction/blueprint-output.schema.json`
- Extraction prompt: `prompts/ai-blueprint-extraction.md`
- Workflow specs: `automations/n8n/`
