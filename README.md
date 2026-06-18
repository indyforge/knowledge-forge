# Knowledge Forge

[![test](https://github.com/indyforge/knowledge-forge/actions/workflows/test.yml/badge.svg)](https://github.com/indyforge/knowledge-forge/actions/workflows/test.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Knowledge Forge is a local-first maintainer workbench for source-backed Markdown archives and auditable agent-assisted workflows.

The public `v0.1` scaffold focuses on one small, testable core: capture a local HTML source into a Markdown note and JSON manifest while preserving provenance. It is intentionally narrow so the project can grow from a reliable public base.

## Project Status

This repository is an early public base for a maintainer-oriented workflow. It prioritizes a narrow, verified core over broad automation:

- source-backed capture with manifests and hashes,
- public fixture tests and GitHub Actions,
- repo-local `AGENTS.md` and `.agents/skills/` workflows,
- explicit write boundaries for local-first use,
- and reviewable Markdown outputs.

See [CODEX_FOR_OSS.md](CODEX_FOR_OSS.md) for the Codex for Open Source fit and API credit plan.

## Why This Exists

Maintainers spend a lot of time on context work: reading issues, checking sources, reviewing changes, preparing releases, and remembering why decisions were made. AI can help, but only if outputs remain tied to sources and can be audited later.

Knowledge Forge keeps the evidence visible:

- source URLs,
- captured timestamps,
- source hashes,
- local artifacts,
- missing-evidence labels,
- and Markdown notes that remain readable without a database.

## Quickstart

```bash
npm test
npm run smoke
```

The smoke command captures `fixtures/simple-article/input.html` into `.tmp/capture`.

Manual command:

```bash
node bin/knowledge-forge.mjs capture-file fixtures/simple-article/input.html \
  --out .tmp/capture \
  --source-url https://example.com/maintainer-thread
```

Output files:

- `.tmp/capture/source.html`
- `.tmp/capture/note.md`
- `.tmp/capture/manifest.json`

## Current Capabilities

- Capture a local HTML file into a source-backed Markdown note.
- Write a JSON manifest with title, source URL, timestamp, content hashes, excerpt, assets, and evidence gaps.
- Keep writes explicit and local.
- Verify behavior with fixture-based tests.

## Maintainer Workflow Fit

Knowledge Forge is intended for workflows such as:

- collecting issue or pull request context before responding,
- preserving source material with hashes and local artifacts,
- turning research into a reusable maintainer brief,
- preparing release notes from auditable evidence,
- and keeping agent output inspectable instead of leaving it only in chat history.

## What v0.1 Does Not Do Yet

- No live browser extension capture.
- No cloud sync.
- No automatic indexing.
- No OCR.
- No embeddings.
- No hidden writes.
- No private vault or personal note assumptions.

## Development

```bash
npm test
npm run check
```

## Repository Automation

This repo includes:

- `AGENTS.md` for Codex and other coding agents,
- `.agents/skills/` for repeatable maintainer workflows,
- and GitHub Actions for test and syntax verification.

## License

MIT
