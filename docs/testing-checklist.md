# Testing Checklist

1. Create test client in Airtable.
2. Confirm Notion intake page is created.
3. Confirm Notion URL writes back to Airtable.
4. Submit test intake.
5. Confirm Airtable Intake Response is created/updated.
6. Run AI extraction on test intake.
7. Confirm valid blueprint JSON.
8. Confirm Blueprint Output record created.
9. Confirm Build Tasks created.
10. Create Stripe test payment.
11. Confirm Airtable Payment Status updates.
12. Confirm notification fires.

## Local Scaffold Checks

- `node scripts/validate-env.js`
- `node scripts/validate-blueprint-json.js path/to/sample.json`
- `node scripts/generate-client-slug.js "Theo" "Howling Mune"`

## Production Readiness Gate

Do not enable production workflows until test records complete the full path with expected statuses, URLs, IDs, and notifications.
