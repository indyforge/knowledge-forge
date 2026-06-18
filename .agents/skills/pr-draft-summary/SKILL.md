---
name: pr-draft-summary
description: Draft a pull request title and body from verified code, tests, docs, risks, and maintainer workflow impact.
---

# PR Draft Summary

Use this skill when a substantial change is ready for review.

## Output Shape

- Suggested branch name
- Suggested PR title
- Summary
- Verification
- Risk and rollback notes
- Follow-up work

## Rules

- Do not claim tests pass unless the verification command was run.
- Mention fixture, manifest, and Markdown changes when capture behavior changes.
- Keep summaries specific and reviewable.
