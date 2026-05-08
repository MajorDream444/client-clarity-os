# Skill: Blueprint Extractor

## Purpose

Convert completed Client Clarity intake responses into valid blueprint JSON for human review.

## Inputs

- Airtable Intake Response fields.
- Notion intake page content.
- Asset/data room notes when provided.
- `prompts/ai-blueprint-extraction.md`.
- `schemas/extraction/blueprint-output.schema.json`.

## Rules

- Return valid JSON only.
- Do not invent facts.
- Separate doctrine from offer.
- Separate long-term vision from first build.
- Identify current revenue proof.
- Identify the fastest path to revenue.
- Identify what should not be built yet.
- Keep proposal pricing human-reviewed.

## Validation

Run:

```bash
node scripts/validate-blueprint-json.js path/to/output.json
```
