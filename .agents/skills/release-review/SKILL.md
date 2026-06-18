---
name: release-review
description: Review release readiness by checking changelog, tests, docs, fixtures, risks, and provenance-sensitive behavior.
---

# Release Review

Use this skill before preparing a release tag or release notes.

## Checklist

1. Run `npm test`.
2. Run `npm run check`.
3. Run `npm run smoke`.
4. Review `CHANGELOG.md`.
5. Confirm docs match CLI behavior.
6. List user-visible changes.
7. List risks and rollback notes.

The release review should produce a short Markdown handoff that a maintainer can inspect before tagging.
