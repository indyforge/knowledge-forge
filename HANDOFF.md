# Knowledge Forge v0.1 Scaffold Handoff

Date: 2026-06-19 KST

## Result

Created a public-ready `v0.1` scaffold for `indyforge/knowledge-forge`.

Path:

`/Users/indy/Documents/Codex/2026-06-18/https-analysis-reports-pages-dev-analysis/outputs/knowledge-forge-v0.1-scaffold`

## What This Scaffold Demonstrates

- Dependency-free Node ESM CLI.
- Local HTML fixture capture.
- Source-backed Markdown note output.
- JSON manifest with source URL, timestamp, SHA-256 hashes, excerpt, evidence gaps, assets, and storage metadata.
- Fixture-based test.
- `AGENTS.md` with maintainer workflow rules.
- Repo-local Codex skills under `.agents/skills/`.
- GitHub Actions workflow.
- OSS docs: README, CONTRIBUTING, SECURITY, CHANGELOG, architecture, provenance model, maintainer workflows.

## Verification

The local environment has a bundled `node` binary but no `npm` executable. I verified the package scripts by running their underlying Node commands directly.

Passed:

```bash
/Users/indy/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --test tests/*.test.mjs
/Users/indy/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check bin/knowledge-forge.mjs
/Users/indy/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check src/capture/capture-html-file.mjs
/Users/indy/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check src/capture/hash.mjs
/Users/indy/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check src/capture/html-to-text.mjs
/Users/indy/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check src/capture/markdown.mjs
/Users/indy/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check tests/capture-file.test.mjs
/Users/indy/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node bin/knowledge-forge.mjs capture-file fixtures/simple-article/input.html --out .tmp/capture --source-url https://example.com/maintainer-thread
```

`npm --version` failed locally with `command not found`; GitHub Actions uses `actions/setup-node@v4`, so `npm test` and `npm run check` should be available there.

## Generated Smoke Output

- `.tmp/capture/source.html`
- `.tmp/capture/note.md`
- `.tmp/capture/manifest.json`

These are ignored by `.gitignore`.

## Next Recommended Step

Review the scaffold, then use it as the first real public code drop for `indyforge/knowledge-forge`. After pushing, create a `v0.1.0` release and a few roadmap issues before submitting the Codex for OSS form.
