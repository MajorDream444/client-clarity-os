# Workflow Environment Map

## Airtable

- `AIRTABLE_API_KEY`: Airtable personal access token.
- `AIRTABLE_BASE_ID`: base ID for `AMA MOB OS V2`.
- `AIRTABLE_CLIENTS_TABLE_ID`: `Client Clarity OS - Clients`.
- `AIRTABLE_INTAKE_RESPONSES_TABLE_ID`: `Client Clarity OS - Intake Responses`.
- `AIRTABLE_BLUEPRINT_OUTPUTS_TABLE_ID`: `Client Clarity OS - Blueprint Outputs`.
- `AIRTABLE_ASSETS_TABLE_ID`: `Client Clarity OS - Assets & Data Room`.
- `AIRTABLE_BUILD_TASKS_TABLE_ID`: `Client Clarity OS - Build Tasks`.
- `AIRTABLE_MASTER_SCHEMA_TABLE_ID`: `Client Clarity OS - Master Schema Reference`.

## Notion

- `NOTION_API_KEY`: Notion integration token.
- `NOTION_CLIENT_CLARITY_DATABASE_ID`: production `Client Clarity Intake` database.
- `NOTION_PARENT_PAGE_ID`: parent page for generated intake/dossier pages.

## AI

- `OPENAI_API_KEY`: API key for extraction.
- `AI_MODEL`: extraction model.

## Stripe

- `STRIPE_SECRET_KEY`: Stripe secret key.
- `STRIPE_WEBHOOK_SECRET`: webhook signing secret.
- `STRIPE_PRICE_STAGE_1`: Stage 1 price ID.
- `STRIPE_PRICE_STAGE_2`: Stage 2 price ID.
- `STRIPE_PRICE_STAGE_3`: Stage 3 price ID.

## Notifications

- `TELEGRAM_BOT_TOKEN`: optional operator notification bot token.
- `TELEGRAM_CHAT_ID`: optional operator notification chat ID.

## App

- `APP_BASE_URL`: public or local app base URL for generated links and callbacks.
