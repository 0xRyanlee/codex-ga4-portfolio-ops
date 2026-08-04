#!/usr/bin/env node

import { readFile } from "node:fs/promises";

const file = process.argv[2];
if (!file) {
  console.error("Usage: node scripts/validate-ga4-map.mjs path/to/measurement-plan.json");
  process.exit(2);
}

const errors = [];
let plan;
try {
  plan = JSON.parse(await readFile(file, "utf8"));
} catch (error) {
  console.error(`Cannot read JSON: ${error.message}`);
  process.exit(2);
}

const projects = Array.isArray(plan.projects) ? plan.projects : [];
if (!projects.length) errors.push("projects must be a non-empty array");

const allowedSurfaces = new Set(["web", "webapp", "android", "ios", "macos", "desktop_webview"]);
const reservedPrefixes = ["firebase_", "google_", "ga_"];
const eventName = /^[a-z][a-z0-9_]*$/;
const parameterName = /^[a-z][a-z0-9_]*$/;
const seenStreams = new Map();

for (const [projectIndex, project] of projects.entries()) {
  const label = `projects[${projectIndex}]`;
  if (!project || typeof project !== "object") {
    errors.push(`${label} must be an object`);
    continue;
  }

  if (!project.project_key) errors.push(`${label}.project_key is required`);
  if (!allowedSurfaces.has(project.surface_type)) {
    errors.push(`${label}.surface_type must be one of ${[...allowedSurfaces].join(", ")}`);
  }

  if (["web", "webapp", "desktop_webview"].includes(project.surface_type)) {
    if (!project.host) errors.push(`${label}.host is required for a web surface`);
    if (project.measurement_id && !/^G-[A-Z0-9]+$/.test(project.measurement_id)) {
      errors.push(`${label}.measurement_id is not a GA4 Web Measurement ID`);
    }
    const streamKey = `${project.host}|${project.stream_strategy}`;
    if (project.host && seenStreams.has(streamKey)) {
      errors.push(`${label}.host duplicates ${seenStreams.get(streamKey)} for the same stream strategy`);
    } else if (project.host) {
      seenStreams.set(streamKey, label);
    }
  }

  if (["android", "ios", "macos"].includes(project.surface_type) && !project.bundle_id) {
    errors.push(`${label}.bundle_id is required for a native app surface`);
  }

  if (!Array.isArray(project.events)) {
    errors.push(`${label}.events must be an array`);
    continue;
  }

  for (const [eventIndex, event] of project.events.entries()) {
    const eventLabel = `${label}.events[${eventIndex}]`;
    if (!event || typeof event !== "object" || typeof event.name !== "string") {
      errors.push(`${eventLabel}.name is required`);
      continue;
    }
    if (event.name.length > 40 || !eventName.test(event.name)) {
      errors.push(`${eventLabel}.name must be lower_snake_case and <= 40 characters`);
    }
    if (reservedPrefixes.some((prefix) => event.name.startsWith(prefix))) {
      errors.push(`${eventLabel}.name uses a reserved prefix`);
    }
    if (!Array.isArray(event.parameters)) {
      errors.push(`${eventLabel}.parameters must be an array`);
      continue;
    }
    for (const parameter of event.parameters) {
      if (typeof parameter !== "string" || !parameterName.test(parameter)) {
        errors.push(`${eventLabel}.parameters contains an invalid parameter name: ${String(parameter)}`);
      }
      if (/^(email|phone|full_name|first_name|last_name|token|password|address)$/i.test(String(parameter))) {
        errors.push(`${eventLabel}.parameters may contain direct PII or secrets: ${parameter}`);
      }
    }
    if (event.name === "cta_click") {
      for (const required of ["cta_id", "cta_location", "destination_type"]) {
        if (!event.parameters.includes(required)) {
          errors.push(`${eventLabel}.parameters must include ${required} for cta_click`);
        }
      }
    }
  }
}

if (errors.length) {
  console.error(`GA4 map invalid (${errors.length} issue${errors.length === 1 ? "" : "s"}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`GA4 map valid: ${projects.length} project${projects.length === 1 ? "" : "s"}`);
