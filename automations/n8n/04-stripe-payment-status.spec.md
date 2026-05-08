# 04-stripe-payment-status

## Trigger

- Stripe payment link / checkout session completed.

## Inputs

- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `STRIPE_PRICE_STAGE_1`
- `STRIPE_PRICE_STAGE_2`
- `STRIPE_PRICE_STAGE_3`
- `AIRTABLE_BASE_ID`
- `AIRTABLE_CLIENTS_TABLE_ID`
- `AIRTABLE_BUILD_TASKS_TABLE_ID`

## Required Stripe Metadata

- `client_record_id`
- `client_slug`
- `project_name`
- `payment_stage`
- `build_track`

## Actions

1. Verify Stripe webhook signature.
2. Identify client and stage from metadata.
3. Update Airtable Payment Status.
4. If Stage 1 Paid, set Client Status to `Build Active`.
5. Create Stage 1 Build Tasks if not already created.
6. Notify Major/operator.

## Write Guards

- Do not activate builds without a matched client record.
- Do not duplicate build tasks.
- Do not infer payment stage from price name alone; use metadata plus configured price IDs.
