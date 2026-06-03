# knowledge-forge

Knowledge Forge is a local-first workbench for maintainers who need to turn source material, issue context, research notes, and agent outputs into a durable, human-readable knowledge archive.

It is built around a simple workflow:

Capture source material with snapshots, metadata, and rollback-friendly assets.
Ask source-backed questions without hiding missing evidence.
Connect new material to existing local knowledge.
Save briefs, answers, and follow-up runs as inspectable artifacts.
The project is designed for maintainers who want AI assistance without losing provenance. Notes stay readable as Markdown. Source paths, snapshots, hashes, local artifacts, and agent run lineage remain inspectable so future maintainers can understand what happened, what was used, and what still needs verification.

Why this exists
Maintainers spend a lot of time on context work: reading issues, checking sources, reviewing changes, preparing releases, and remembering why decisions were made. AI can help, but only if the outputs remain tied to sources and can be audited later.

Knowledge Forge focuses on that boundary. It does not treat agent output as final truth. It keeps evidence, gaps, previews, approvals, and saved results visible.

Current capabilities
Web and article capture into Markdown notes with source URLs, snapshots, metadata, and local image assets.
Local Library Search workflows for asking questions against known material.
Evidence-gap handling when existing sources do not answer a question.
Save-before-answer lineage for briefs, local LLM answers, and follow-up runs.
Local LLM Studio integration for translation, summarization, and job status recovery.
Browser UI recovery for in-progress translation jobs using existing job IDs.
Regression-tested handling for print/PDF brief layouts and visual source preservation.
Maintainer workflow fit
Knowledge Forge is useful when a maintainer needs to:

collect issue or PR context before responding;
summarize a long source thread without losing links and snapshots;
turn research into a reusable maintainer brief;
preserve agent output with source lineage instead of ephemeral chat history;
compare new material against prior notes before making a decision;
keep a local audit trail for releases, reviews, and follow-up questions.
Design principles
Local-first by default.
Human-readable Markdown as the durable storage layer.
Source provenance stays visible.
Missing evidence is labeled instead of smoothed over.
Writes are explicit and previewable.
Agent output is useful only when it is inspectable.
Status
This project is early and actively developed. The current implementation is being shaped around a personal maintainer workflow, with the goal of extracting the reusable local-first capture, search, brief, and lineage pieces into a public open-source toolkit.
