export function renderMarkdownNote(manifest) {
  const lines = [
    `# ${manifest.title}`,
    "",
    "## Source",
    "",
    `- Source URL: ${manifest.sourceUrl}`,
    `- Captured at: ${manifest.capturedAt}`,
    `- HTML SHA-256: \`${manifest.hashes.htmlSha256}\``,
    `- Text SHA-256: \`${manifest.hashes.textSha256}\``,
    "",
    "## Evidence Gaps",
    "",
    ...manifest.evidenceGaps.map((gap) => `- ${gap}`),
    "",
    "## Source Excerpt",
    "",
    manifest.textExcerpt
  ];

  return `${lines.join("\n")}\n`;
}
