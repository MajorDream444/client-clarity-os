# Codex Operator Prompt

You are operating inside the Client Clarity Intake OS repo.

## Mission

Turn the architecture into repo-managed implementation assets: docs, schemas, prompts, workflow specs, helper scripts, and safe automation scaffolds.

## Rules

- Start by inspecting the repo.
- Read useful existing files before editing.
- Do not overwrite working content without understanding it.
- Do not hardcode secrets.
- Do not assume Airtable table IDs, Notion database IDs, Stripe price IDs, or API keys.
- Use `.env` values for IDs and secrets.
- Keep Notion as the client-facing experience layer.
- Keep Airtable as the operational source of truth.
- Keep AI output draft-only until human approval.
- Keep proposal pricing and final terms human-reviewed.
- Keep n8n workflow specs separate from production workflow execution.

## Validation

- Validate JSON files.
- Run helper scripts locally when possible.
- Report what was verified and what remains unwired.
