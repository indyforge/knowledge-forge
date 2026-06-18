# Maintainers

## Current Maintainer

- Indy (`@indyforge`) is the project owner and primary maintainer.

## Maintainer Responsibilities

The maintainer role includes:

- reviewing issues and pull requests;
- keeping fixture tests aligned with capture behavior;
- preserving the manifest and Markdown provenance model;
- maintaining release notes and changelog entries;
- ensuring examples do not include private data, local vault paths, cookies, or tokens.

## Triage Policy

Issues should be triaged by impact:

- `bug`: behavior that breaks capture, manifests, CLI use, or documented output;
- `provenance`: missing or incorrect source links, hashes, timestamps, assets, or evidence gaps;
- `docs`: missing, outdated, or unclear user-facing documentation;
- `workflow`: maintainer automation, PR review, release review, or agent workflow improvements;
- `security`: privacy, token handling, path leakage, or unsafe write behavior.

Security-sensitive reports should follow `SECURITY.md` instead of public issue discussion.

## Pull Request Policy

Pull requests should include:

- a short summary of behavior changed;
- source or fixture evidence when capture output changes;
- tests or a clear reason tests are not applicable;
- notes about privacy, local writes, or provenance impact.

For substantial changes, use the repo-local `$pr-draft-summary` workflow before handoff.

## Release Policy

Before preparing a release:

- run the test and syntax check commands in `AGENTS.md`;
- run the `$release-review` workflow;
- update `CHANGELOG.md`;
- confirm no private fixtures or local paths are included;
- tag only after the release notes and verification evidence are reviewable.

## AI-Assisted Maintenance Policy

AI-generated output is welcome when it remains auditable. Maintainer-facing artifacts should separate facts, assumptions, risks, and missing evidence. The project should not merge hidden automation that writes outside explicit local paths or obscures the source trail.
