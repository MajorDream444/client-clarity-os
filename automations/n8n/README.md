# n8n Workflows

Production workflow JSON is not wired yet. Build from these specs after Airtable table IDs, Notion database IDs, Stripe price IDs, and credentials are confirmed.

## Specs

- `01-client-intake-setup.spec.md`
- `02-intake-sync.spec.md`
- `03-blueprint-generator.spec.md`
- `04-stripe-payment-status.spec.md`
- `workflow-env-map.md`

## Workflow 1 — Client Intake Setup

Trigger:
- Airtable record created
- Status = New

Actions:
1. Read Airtable client record
2. Determine intake template type
3. Create Notion intake page
4. Create Airtable intake response record
5. Update Airtable client record with Notion URL
6. Notify operator

## Workflow 2 — Intake Sync

Trigger:
- Notion intake marked complete

Actions:
1. Pull intake answers
2. Sync to Airtable
3. Update status
4. Notify operator

## Workflow 3 — Blueprint Generator

Trigger:
- Intake Complete

Actions:
1. Run AI extraction
2. Generate blueprint
3. Create Notion dossier
4. Create build tasks
5. Update client status

## Workflow 4 — Stripe Payment Status

Trigger:
- Stripe checkout/payment completed

Actions:
1. Verify webhook event
2. Read client/stage metadata
3. Update Airtable payment status
4. Set Stage 1 paid clients to Build Active
5. Notify operator
