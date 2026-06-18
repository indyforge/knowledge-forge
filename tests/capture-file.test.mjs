import assert from "node:assert/strict";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { test } from "node:test";

import { captureHtmlFile } from "../src/capture/capture-html-file.mjs";

const fixturePath = path.resolve("fixtures/simple-article/input.html");

test("captureHtmlFile writes a source-backed manifest and Markdown note", async () => {
  const outDir = await mkdtemp(path.join(tmpdir(), "knowledge-forge-capture-"));

  try {
    const result = await captureHtmlFile({
      inputFile: fixturePath,
      outDir,
      sourceUrl: "https://example.com/maintainer-thread"
    });

    assert.equal(result.manifest.sourceUrl, "https://example.com/maintainer-thread");
    assert.equal(result.manifest.title, "Maintainer context should stay inspectable");
    assert.match(result.manifest.hashes.htmlSha256, /^[a-f0-9]{64}$/);
    assert.match(result.manifest.hashes.textSha256, /^[a-f0-9]{64}$/);
    assert.equal(result.manifest.assets.length, 0);
    assert.ok(result.manifest.textExcerpt.includes("pull request"));
    assert.ok(result.manifest.evidenceGaps.includes("No external verification has been run yet."));

    const note = await readFile(result.notePath, "utf8");
    assert.ok(note.includes("# Maintainer context should stay inspectable"));
    assert.ok(note.includes("Source URL: https://example.com/maintainer-thread"));
    assert.ok(note.includes("HTML SHA-256:"));
    assert.ok(note.includes("## Evidence Gaps"));
    assert.ok(note.includes("No external verification has been run yet."));
    assert.ok(note.includes("## Source Excerpt"));

    const manifestRaw = await readFile(result.manifestPath, "utf8");
    const manifest = JSON.parse(manifestRaw);
    assert.equal(manifest.schemaVersion, 1);
    assert.equal(manifest.storage.noteFile, "note.md");
    assert.equal(manifest.storage.originalFile, "source.html");

    const resolvedOut = path.resolve(outDir);
    assert.ok(path.resolve(result.notePath).startsWith(resolvedOut));
    assert.ok(path.resolve(result.manifestPath).startsWith(resolvedOut));
  } finally {
    await rm(outDir, { recursive: true, force: true });
  }
});
