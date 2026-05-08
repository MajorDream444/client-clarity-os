#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const inputPath = process.argv[2];

if (!inputPath) {
  console.error("Usage: node scripts/validate-blueprint-json.js path/to/blueprint-output.json");
  process.exit(1);
}

const schemaPath = path.join(__dirname, "..", "schemas", "extraction", "blueprint-output.schema.json");
const schema = JSON.parse(fs.readFileSync(schemaPath, "utf8"));
const data = JSON.parse(fs.readFileSync(inputPath, "utf8"));

const errors = [];

function typeOf(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
}

for (const key of schema.required || []) {
  if (!(key in data)) {
    errors.push(`Missing required key: ${key}`);
  }
}

if (schema.additionalProperties === false) {
  for (const key of Object.keys(data)) {
    if (!schema.properties[key]) {
      errors.push(`Unexpected key: ${key}`);
    }
  }
}

for (const [key, definition] of Object.entries(schema.properties || {})) {
  if (!(key in data)) continue;

  const actualType = typeOf(data[key]);
  if (actualType !== definition.type) {
    errors.push(`Invalid type for ${key}: expected ${definition.type}, got ${actualType}`);
    continue;
  }

  if (definition.type === "array") {
    data[key].forEach((item, index) => {
      const itemType = typeOf(item);
      const expectedType = definition.items && definition.items.type;
      if (expectedType && itemType !== expectedType) {
        errors.push(`Invalid type for ${key}[${index}]: expected ${expectedType}, got ${itemType}`);
      }
    });
  }
}

if (errors.length > 0) {
  console.error("Blueprint JSON validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Blueprint JSON validation passed.");
