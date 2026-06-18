# Basic Capture Example

Run from the repository root:

```bash
npm run smoke
```

This captures `fixtures/simple-article/input.html` into `.tmp/capture`.

Expected files:

- `.tmp/capture/source.html`
- `.tmp/capture/note.md`
- `.tmp/capture/manifest.json`

The generated note is a source-backed Markdown artifact. The manifest is structured metadata for future tools.
