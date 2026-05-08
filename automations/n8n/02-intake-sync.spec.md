# 02-intake-sync

## Trigger

- Notion `Client Clarity Intake` Status is `Submitted` or `Complete`.

## Fallback

- Scheduled polling every 15 minutes.

## Inputs

- `NOTION_CLIENT_CLARITY_DATABASE_ID`
- `AIRTABLE_BASE_ID`
- `AIRTABLE_CLIENTS_TABLE_ID`
- `AIRTABLE_INTAKE_RESPONSES_TABLE_ID`

## Actions

1. Query Notion `Client Clarity Intake`.
2. Find submitted records where `Blueprint Generated = false`.
3. Upsert into Airtable `Client Clarity OS - Intake Responses`.
4. Update Client Status to `Intake Complete`.
5. Notify Major/operator.

## Upsert Key

Prefer:

1. `Airtable Record ID`
2. client slug + project slug
3. email + project name

## Write Guards

- Do not overwrite richer Airtable operator notes with blank Notion values.
- Preserve Raw Notion Page URL.
- Keep `Blueprint Generated = false` until workflow 03 succeeds.
