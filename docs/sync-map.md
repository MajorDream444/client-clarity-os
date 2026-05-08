# Sync Map

## Client Identity

Use stable matching fields in this order:

1. Airtable record ID
2. `client_slug`
3. Client email + project name
4. Client name as display-only fallback

## Notion to Airtable Intake Mapping

| Notion Property | Airtable Field |
| --- | --- |
| Client Name | Client Name |
| Brand / Project | Project Name |
| Template Type | Template Type |
| Status | Completion Status |
| Origin | Origin Answer |
| Work / Authority | Work / Authority Answer |
| People / ICP | People / ICP Answer |
| Offer / Revenue | Offer / Revenue Answer |
| Resistance / Boundaries | Resistance / Boundaries Answer |
| Expression / Delivery | Expression / Delivery Answer |
| Vision | Vision Answer |
| Reality Check | Reality Check Answer |
| Final Reflection | Final Reflection |
| Asset Links | Assets Provided |
| Drive / Data Room URL | Drive URL |
| Airtable Record ID | Response ID or linked Client record |

## AI Output to Airtable Blueprint Mapping

| JSON Key | Airtable Field |
| --- | --- |
| founder_profile | Founder Profile |
| doctrine_map | Doctrine Map |
| core_icp | ICP |
| offer_ladder | Offer Ladder |
| current_revenue_proof | Current Revenue Proof |
| lead_flow_diagnosis | Lead Flow Diagnosis |
| conversion_diagnosis | Conversion Diagnosis |
| recommended_first_build | Priority Build |
| thirty_day_plan | 30-Day Roadmap |
| proposal_angle | Proposal Notes |
| operator_notes | Proposal Notes / Operator Notes |

## Stripe to Airtable Mapping

| Stripe Metadata/Event | Airtable Field |
| --- | --- |
| `client_record_id` | Client record |
| `client_slug` | Matching key |
| `payment_stage` | Payment Status |
| `build_track` | Build Track |
| checkout completed | Status / Payment Status |
