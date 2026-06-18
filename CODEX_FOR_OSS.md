# Codex for Open Source Fit

Knowledge Forge is an early local-first maintainer workbench for source-backed research, Markdown archives, and agent-assisted workflows. The project is intentionally small today: `v0.1` proves a capture core that keeps source material, note output, and a manifest together so maintainer context can be reviewed later.

## Why This Repository Fits

Open-source maintenance depends on context work that is hard to automate safely: issue triage, pull request review, release preparation, source verification, and explaining decisions after the fact. Knowledge Forge focuses on the evidence layer for that work.

The repository is designed around these maintainer needs:

- keep source URLs, timestamps, and content hashes visible;
- preserve local source artifacts alongside generated notes;
- label missing evidence instead of hiding uncertainty;
- produce Markdown that can be inspected without a database;
- make writes explicit and local-first;
- encode repeatable agent workflows in `AGENTS.md` and `.agents/skills/`.

The near-term goal is not to replace maintainers. It is to make AI-assisted maintainer work reproducible, source-backed, and easier to review.

## Current Public Signals

The public repository currently includes:

- an MIT license;
- a tested Node.js CLI scaffold;
- fixture-based tests for capture behavior;
- GitHub Actions for test and syntax verification;
- `CONTRIBUTING.md`, `SECURITY.md`, and `MAINTAINERS.md`;
- repo-local Codex instructions in `AGENTS.md`;
- repo-local skills for capture verification, maintainer briefs, PR draft summaries, and release review.

This is a new public project, so broad adoption metrics such as stars, forks, and downloads are not yet the strongest signal. The stronger signal is the maintainer workflow design: the repo is already structured around review, triage, release, provenance, and explicit safety boundaries.

## API Credit Plan

API credits would be used for maintainer workflows that create reviewable artifacts rather than hidden chat-only output:

- source-backed issue and pull request triage summaries;
- maintainer briefs that include source links, captured artifacts, hashes, and evidence gaps;
- release-readiness reports comparing changes, tests, docs, and known risks;
- documentation and test-gap audits grounded in repository files;
- PR draft summaries that separate facts, assumptions, risks, and follow-up work;
- small eval runs for capture quality, provenance completeness, and missing-evidence labeling.

Outputs should be saved as Markdown and JSON artifacts that can be inspected, revised, and committed when appropriate.

## Guardrails

Knowledge Forge should keep these boundaries:

- no private vault paths, cookies, tokens, or local databases in public fixtures;
- no hidden cloud sync or background writes;
- no broad indexing, OCR, embeddings, or remote upload by default;
- no claims without a source URL, local artifact, hash, or explicit missing-evidence label;
- no automated maintainer actions without human review.

## Near-Term Roadmap

- `v0.2`: issue and PR context fixtures with source-backed maintainer briefs.
- `v0.3`: release-review artifacts that link changelog entries to evidence.
- `v0.4`: optional GitHub Action workflow for PR summary drafts.
- `v0.5`: browser-capture integration with explicit preview and rollback boundaries.

Each milestone should keep the same principle: useful automation is only acceptable when the source trail remains visible.
