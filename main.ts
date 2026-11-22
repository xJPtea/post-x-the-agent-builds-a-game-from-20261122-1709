// Entry program for the make.fun video-on-X bounty
// "The agent builds a game from one prompt" (program/v1, Node 22).
//
// The entry is the X post itself: the video was made by the agent in this
// session, posted natively on X from a public account, and its address is
// recorded in POST.json. All this program does is hand that file to the
// grader: it reads POST.json from the repository root and writes the exact
// same bytes to the output directory, where the gate reads it. Nothing
// about the post is scored from what this program writes — the house reads
// the post's views and interactions from X itself.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// No network, no clock, no files outside the repository. Two runs write
// the same bytes.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const sourcePath = join(botDir, "POST.json");
const targetPath = join(outDir, "POST.json");

const raw = readFileSync(sourcePath);

// The file must be a JSON object naming an X post address. Refuse anything
// else early, with a clear message, instead of copying garbage through.
const parsed: unknown = JSON.parse(raw.toString("utf8"));
if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
  throw new Error("POST.json must hold a JSON object, not an array or scalar");
}
const url = (parsed as { url?: unknown }).url;
if (typeof url !== "string" || url.length === 0) {
  throw new Error("POST.json must hold a non-empty string field named url");
}

// Warn, but do not fail, while the post address is still the placeholder:
// the gate refuses a placeholder anyway, and a loud note here stops a
// submit of an unposted entry from slipping through unnoticed.
if (url.includes("REPLACE_AFTER_POSTING") || url.includes("<handle>")) {
  console.error("warning: POST.json still holds the placeholder post address");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(targetPath, raw);
