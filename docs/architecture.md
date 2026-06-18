# Architecture

Knowledge Forge v0.1 is intentionally small.

```text
bin/knowledge-forge.mjs
  -> src/capture/capture-html-file.mjs
      -> html-to-text.mjs
      -> hash.mjs
      -> markdown.mjs
```

## CLI

The CLI accepts explicit commands and writes only to the requested output directory.

## Capture Core

`captureHtmlFile` reads a local HTML file, extracts title and text, computes hashes, writes `source.html`, writes `note.md`, and writes `manifest.json`.

## Durable Output

Markdown is the human-readable storage layer. JSON manifests are for structured tooling and future compatibility.

## Design Constraints

- Local-first by default.
- No hidden network writes.
- No background indexing.
- Fixture tests for output behavior.
- Small modules with one clear responsibility.
