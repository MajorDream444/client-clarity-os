#!/usr/bin/env node

const required = [
  "AIRTABLE_API_KEY",
  "AIRTABLE_BASE_ID",
  "AIRTABLE_CLIENTS_TABLE_ID",
  "AIRTABLE_INTAKE_RESPONSES_TABLE_ID",
  "AIRTABLE_BLUEPRINT_OUTPUTS_TABLE_ID",
  "AIRTABLE_ASSETS_TABLE_ID",
  "AIRTABLE_BUILD_TASKS_TABLE_ID",
  "AIRTABLE_MASTER_SCHEMA_TABLE_ID",
  "NOTION_API_KEY",
  "NOTION_CLIENT_CLARITY_DATABASE_ID",
  "NOTION_PARENT_PAGE_ID",
  "OPENAI_API_KEY",
  "AI_MODEL",
  "STRIPE_SECRET_KEY",
  "STRIPE_WEBHOOK_SECRET",
  "STRIPE_PRICE_STAGE_1",
  "STRIPE_PRICE_STAGE_2",
  "STRIPE_PRICE_STAGE_3",
  "TELEGRAM_BOT_TOKEN",
  "TELEGRAM_CHAT_ID",
  "APP_BASE_URL"
];

const missing = required.filter((name) => !process.env[name] || process.env[name].trim() === "");

if (missing.length > 0) {
  console.error("Missing required environment variables:");
  for (const name of missing) {
    console.error(`- ${name}`);
  }
  process.exit(1);
}

console.log("Environment check passed. All required variables are present.");
