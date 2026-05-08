# Stripe Payment Flow

Stripe handles staged payment confirmation. It does not determine final pricing or proposal terms.

## Stages

| Stage | Env Var | Airtable Payment Status |
| --- | --- | --- |
| Stage 1 | `STRIPE_PRICE_STAGE_1` | Stage 1 Sent / Stage 1 Paid |
| Stage 2 | `STRIPE_PRICE_STAGE_2` | Stage 2 Paid |
| Stage 3 | `STRIPE_PRICE_STAGE_3` | Stage 3 Paid |

## Required Metadata

Every payment link or checkout session should include:

- `client_slug`
- `client_record_id`
- `project_name`
- `payment_stage`
- `build_track`

## Webhook Behavior

When checkout/payment completes:

1. Verify `STRIPE_WEBHOOK_SECRET`.
2. Read client and stage metadata.
3. Update Airtable Payment Status.
4. If Stage 1 is paid, set Client Status to `Build Active`.
5. Create Stage 1 Build Tasks only if they do not already exist.
6. Notify Major/operator.

## Human Review Boundary

Pricing, scope, final proposal terms, and payment schedule remain human-reviewed. Stripe only confirms payment events.
