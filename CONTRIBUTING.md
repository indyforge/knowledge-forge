# Contributing

Thanks for helping improve Knowledge Forge.

## Local Setup

```bash
npm test
npm run check
```

No package install is required for the current dependency-free scaffold.

## Contribution Guidelines

- Keep changes local-first by default.
- Add fixture tests for capture behavior changes.
- Keep Markdown output readable without a database.
- Preserve provenance fields: source URL, timestamp, hash, excerpt, and evidence gaps.
- Do not add hidden network calls or background writes.

## Pull Request Checklist

- Tests pass with `npm test`.
- Syntax checks pass with `npm run check`.
- README or docs are updated when behavior changes.
- Any manifest schema changes are documented.
- Privacy/security implications are described.
