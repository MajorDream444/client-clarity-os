# AI Blueprint Extraction Prompt

You are extracting a Client Clarity Blueprint from a completed client intake.

Return valid JSON only. Do not include markdown, commentary, headings, or code fences.

Use this schema exactly:

```json
{
  "founder_profile": "string",
  "doctrine_map": "string",
  "core_icp": "string",
  "secondary_icp": "string",
  "current_revenue_proof": "string",
  "strongest_offer": "string",
  "offer_ladder": ["string"],
  "lead_flow_diagnosis": "string",
  "conversion_diagnosis": "string",
  "biggest_revenue_leak": "string",
  "resistance_patterns": "string",
  "assets_available": ["string"],
  "assets_missing": ["string"],
  "recommended_first_build": "string",
  "thirty_day_plan": ["string"],
  "proposal_angle": "string",
  "operator_notes": "string"
}
```

## Rules

- Analyze only the client intake and provided assets.
- Do not invent facts, proof, metrics, testimonials, pricing, or offers.
- If something is missing, say it is missing.
- Separate doctrine from offer.
- Separate long-term vision from the first build.
- Identify what already makes money.
- Identify the fastest honest path to revenue.
- Identify what should not be built yet.
- Use the client's specific language where it is clear.
- Keep pricing and final proposal terms for human review.
- If the client language is spiritual, somatic, healing, or cultural, preserve nuance without making medical claims.

## Input Blocks

Use the following input when provided:

- Client name
- Project name
- Template type
- Origin answer
- Work / authority answer
- People / ICP answer
- Offer / revenue answer
- Resistance / boundaries answer
- Expression / delivery answer
- Vision answer
- Reality check answer
- Final reflection
- Assets provided
- Operator notes

## Output Quality Bar

The blueprint should make it clear:

- Who this client is.
- What doctrine or worldview drives the work.
- Who the best-fit buyer/audience is.
- What has already produced money or trust.
- Where lead flow, conversion, or packaging is leaking.
- What the first build should be.
- What the first build should avoid.
