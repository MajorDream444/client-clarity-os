# n8n Workflows

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
