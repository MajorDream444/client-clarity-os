# 03-blueprint-generator

## Trigger

- Airtable Intake Response `Completion Status = Submitted`, or
- Airtable Intake Response `Completion Status = Synced`

## Inputs

- `AIRTABLE_BASE_ID`
- `AIRTABLE_INTAKE_RESPONSES_TABLE_ID`
- `AIRTABLE_BLUEPRINT_OUTPUTS_TABLE_ID`
- `AIRTABLE_BUILD_TASKS_TABLE_ID`
- `NOTION_CLIENT_CLARITY_DATABASE_ID`
- `OPENAI_API_KEY`
- `AI_MODEL`

## Actions

1. Pull full intake answers.
2. Send to AI extraction prompt.
3. Validate JSON output against `schemas/extraction/blueprint-output.schema.json`.
4. Create Airtable Blueprint Output.
5. Create Notion Dossier page.
6. Link Notion Dossier URL back to Airtable.
7. Create Build Tasks from `thirty_day_plan`.
8. Update Client Status to `Blueprint Generated`.
9. Notify Major/operator.

## Human Review Gate

- Set Blueprint Output `Approved? = false` by default.
- Do not create final proposal pricing.
- Do not trigger build execution.

## Error Handling

- If JSON validation fails, set Intake Response `Review Status = Needs Follow-up`.
- Store validation error summary in operator notes.
- Notify Major/operator with the record ID.
