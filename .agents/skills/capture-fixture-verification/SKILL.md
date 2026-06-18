---
name: capture-fixture-verification
description: Verify capture fixtures, Markdown output, manifests, hashes, and evidence-gap behavior after capture-related changes.
---

# Capture Fixture Verification

Use this skill when code changes affect capture behavior, source text extraction, manifests, hashes, fixtures, or Markdown output.

## Checklist

1. Run `npm test`.
2. Run `npm run smoke`.
3. Inspect `.tmp/capture/note.md` and `.tmp/capture/manifest.json`.
4. Confirm the note includes source URL, hashes, evidence gaps, and source excerpt.
5. Confirm the manifest keeps `schemaVersion`, `sourceUrl`, `capturedAt`, `hashes`, `textExcerpt`, `evidenceGaps`, and `storage`.

Do not mark capture work complete until tests and smoke output match the expected provenance model.
