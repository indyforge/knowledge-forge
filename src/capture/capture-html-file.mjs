import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { sha256Hex } from "./hash.mjs";
import { extractTitle, htmlToText } from "./html-to-text.mjs";
import { renderMarkdownNote } from "./markdown.mjs";

export async function captureHtmlFile({ inputFile, outDir, sourceUrl }) {
  if (!inputFile) {
    throw new Error("inputFile is required");
  }
  if (!outDir) {
    throw new Error("outDir is required");
  }
  if (!sourceUrl) {
    throw new Error("sourceUrl is required");
  }

  const resolvedInput = path.resolve(inputFile);
  const resolvedOut = path.resolve(outDir);
  const html = await readFile(resolvedInput, "utf8");
  const text = htmlToText(html);
  const title = extractTitle(html);
  const manifest = {
    schemaVersion: 1,
    title,
    sourceUrl,
    capturedAt: new Date().toISOString(),
    hashes: {
      htmlSha256: sha256Hex(html),
      textSha256: sha256Hex(text)
    },
    textExcerpt: excerpt(text),
    evidenceGaps: [
      "No external verification has been run yet.",
      "This v0.1 scaffold captures local HTML fixtures only; live browser snapshots are not included."
    ],
    assets: [],
    storage: {
      originalFile: "source.html",
      noteFile: "note.md",
      manifestFile: "manifest.json"
    }
  };

  await mkdir(resolvedOut, { recursive: true });
  const sourcePath = path.join(resolvedOut, manifest.storage.originalFile);
  const notePath = path.join(resolvedOut, manifest.storage.noteFile);
  const manifestPath = path.join(resolvedOut, manifest.storage.manifestFile);

  await writeFile(sourcePath, html, "utf8");
  await writeFile(notePath, renderMarkdownNote(manifest), "utf8");
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

  return {
    manifest,
    sourcePath,
    notePath,
    manifestPath
  };
}

function excerpt(text) {
  const normalized = String(text).replace(/\s+/g, " ").trim();
  if (normalized.length <= 600) {
    return normalized;
  }
  return `${normalized.slice(0, 597).trimEnd()}...`;
}
