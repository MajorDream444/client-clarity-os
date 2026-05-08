#!/usr/bin/env node

const [clientName = "", projectName = ""] = process.argv.slice(2);

if (!clientName && !projectName) {
  console.error("Usage: node scripts/generate-client-slug.js \"Client Name\" \"Project Name\"");
  process.exit(1);
}

const stopWords = new Set([
  "foundation",
  "engine",
  "os",
  "the",
  "a",
  "an",
  "and",
  "client",
  "project"
]);

function words(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

const clientWords = words(clientName);
const projectWords = words(projectName).filter((word) => !stopWords.has(word));
const selectedClientWords = clientWords.length > 1 ? [clientWords[0]] : clientWords;
const slugWords = [...selectedClientWords, ...projectWords];

const seen = new Set();
const slug = slugWords
  .filter((word) => {
    if (seen.has(word)) return false;
    seen.add(word);
    return true;
  })
  .join("_");

console.log(slug);
