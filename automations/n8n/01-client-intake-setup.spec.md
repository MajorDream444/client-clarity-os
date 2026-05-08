# 01-client-intake-setup

## Trigger

- Airtable `Client Clarity OS - Clients` record created, or
- Airtable Client `Status = New`

## Inputs

- `AIRTABLE_BASE_ID`
- `AIRTABLE_CLIENTS_TABLE_ID`
- `AIRTABLE_INTAKE_RESPONSES_TABLE_ID`
- `NOTION_CLIENT_CLARITY_DATABASE_ID`
- `NOTION_PARENT_PAGE_ID`
- optional `TELEGRAM_CHAT_ID`

## Actions

1. Read Airtable client record.
2. Determine Template Type from Client Type / Assigned System.
3. Create Notion intake page from matching template.
4. Create Airtable Intake Response placeholder.
5. Update Client record with Notion Intake URL.
6. Set Client Status to `Intake Sent`.
7. Optional notification/message to Major.

## Template Mapping

| Client Type / Assigned System | Notion Template |
| --- | --- |
| Creator-Healer | Creator-Healer Intake |
| Retreat / Wellness or Shakti System | Shakti System Intake |
| Media / PR or Graffiti Media Engine | Media Engine Intake |
| Other | Generic Client Blueprint |

## Write Guards

- Do not create duplicate Notion pages if `Notion Intake URL` already exists.
- Do not create duplicate intake placeholders for the same client record.
- Log record IDs and slugs only.
