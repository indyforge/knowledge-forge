# AGENTS.md

## Project Overview

Knowledge Forge is a local-first maintainer workbench for source-backed Markdown archives and auditable agent-assisted workflows.

The public `v0.1` core captures local HTML fixtures into Markdown notes and JSON manifests with source URLs, timestamps, hashes, excerpts, evidence gaps, and explicit local writes.

## Mandatory Workflow Rules

- Use `$capture-fixture-verification` when capture behavior, manifests, snapshots, hashes, fixtures, or Markdown output changes.
- Use `$maintainer-brief` when preparing issue, pull request, source, or release context for human review.
- Use `$release-review` before release notes or tag preparation.
- Use `$pr-draft-summary` when preparing a substantial pull request.

## Build And Test

- Test: `npm test`
- Syntax check: `npm run check`
- Smoke test: `npm run smoke`

## Compatibility Rules

- Keep the capture manifest schema backward-compatible within a minor release.
- Add fixture tests for any change to Markdown output.
- Do not introduce hidden network writes, cloud sync, broad indexing, OCR, or embeddings by default.
- Preserve human-readable Markdown as the durable storage layer.

## Security And Privacy

- Do not commit personal vault paths, cookies, API keys, private notes, local database contents, or raw user-private captures.
- Fixtures must be synthetic or explicitly public.
- Redact local machine-specific paths from examples.
- Keep writes explicit and previewable.
