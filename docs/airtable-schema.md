# Airtable Schema

Base: `AMA MOB OS V2`

The six canonical tables below are already created. JSON table contracts live in `schemas/airtable/`.

## Client Clarity OS - Clients

Purpose: master CRM and deal flow.

Key statuses: New, Intake Sent, Intake Started, Intake Complete, Reviewing, Blueprint Generated, Proposal Sent, Closed Won, Closed Lost, Build Active, Paused.

Payment stages: Not Sent, Stage 1 Sent, Stage 1 Paid, Stage 2 Paid, Stage 3 Paid, Overdue.

## Client Clarity OS - Intake Responses

Purpose: long-form Notion answers prepared for AI extraction.

The intake response record should preserve raw answers, extracted summaries, recommended first build, 30-day plan, and review status.

## Client Clarity OS - Blueprint Outputs

Purpose: AI-generated and operator-reviewed blueprint outputs.

Blueprint records should remain drafts until `Approved?` is checked by a human operator.

## Client Clarity OS - Assets & Data Room

Purpose: track supporting files, proof, links, and missing assets.

Assets should be linked back to client/project and tagged by usefulness.

## Client Clarity OS - Build Tasks

Purpose: convert approved blueprint plans into staged execution.

Tasks should not become active until the blueprint is approved and payment stage rules are satisfied.

## Client Clarity OS - Master Schema Reference

Purpose: governance table for field mappings across Airtable, Notion, Sheets, Codex, and n8n.

Use this table to track whether fields are Planned, Mapped, Built, or Needs Review.
