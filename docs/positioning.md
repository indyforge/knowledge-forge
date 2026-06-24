# Positioning

Knowledge Forge sits near the RAG, agent, and auto-wiki ecosystem, but it starts from a smaller maintainer problem.

Large knowledge platforms prove that teams want AI systems to turn source material into searchable answers, agent workflows, and living documentation. Knowledge Forge is intentionally narrower: it focuses on the source-backed evidence layer that maintainers need before agent output becomes a review, release note, documentation update, or saved brief.

## What This Project Is

- A local-first capture and provenance scaffold for maintainer context.
- A way to keep source URLs, timestamps, hashes, local artifacts, and evidence gaps visible.
- A Markdown and JSON artifact flow that can be reviewed before being committed or shared.
- A place to encode repeatable maintainer agent workflows through `AGENTS.md` and repo-local skills.

## What This Project Is Not

- Not a hosted knowledge base.
- Not an enterprise search stack.
- Not a full RAG product.
- Not an auto-publishing wiki system.
- Not a hidden background automation layer.

## Why The Narrow Scope Matters

Maintainer work often fails at the boundary between "the agent produced something useful" and "the project can later explain why that output was trusted." Knowledge Forge treats that boundary as the product surface.

The project should make these questions easy to answer:

- What source did this note come from?
- What local artifact was preserved?
- What changed between the source and the summary?
- What evidence is missing?
- What write was performed, and where?
- What should a human review before using the output?

## Relationship To Larger Knowledge Tools

Larger RAG and auto-wiki systems are useful signals for the ecosystem. They show that document-to-knowledge workflows are valuable, and that agents will increasingly sit between source material and published knowledge.

Knowledge Forge complements that direction by focusing on the maintainer audit trail. It is designed to be useful even before a project adopts embeddings, a vector database, browser capture, live GitHub automation, or a generated wiki surface.

## Near-Term Differentiation

The public roadmap should keep this order:

1. Provenance and local artifacts.
2. Maintainer briefs and issue/PR context.
3. Release review and documentation gap artifacts.
4. Optional browser capture with explicit preview and rollback.
5. Optional indexing or retrieval only after source identity remains inspectable.

This keeps the project small, honest, and reviewable while still making it a practical foundation for Codex-assisted open-source maintenance.
