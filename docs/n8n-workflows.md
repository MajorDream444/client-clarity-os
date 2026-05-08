# n8n Workflows

Production n8n workflow JSON is not wired yet. This repo stores the workflow specs that should be converted into n8n workflows after environment IDs and credentials are confirmed.

## Workflow Order

1. `01-client-intake-setup`
2. `02-intake-sync`
3. `03-blueprint-generator`
4. `04-stripe-payment-status`

## Safety Rules

- Use environment variables for all API keys and table/database IDs.
- Start with test clients.
- Log record IDs and slugs, not secret values.
- Validate AI output before writing Blueprint Outputs.
- Do not trigger build execution from AI output alone.
- Keep notifications informational unless explicitly upgraded.
