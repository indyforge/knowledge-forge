# Provenance Model

Knowledge Forge treats agent output as useful only when the source trail remains inspectable.

## Captured Fields

- `sourceUrl`: the source location supplied by the maintainer.
- `capturedAt`: ISO timestamp.
- `hashes.htmlSha256`: hash of the source HTML.
- `hashes.textSha256`: hash of the normalized text.
- `textExcerpt`: readable excerpt for quick review.
- `evidenceGaps`: what has not been verified yet.
- `storage`: local file names written for the capture.

## Evidence Gaps

Evidence gaps are first-class output. The tool labels missing verification instead of smoothing it over in prose.

## Local Artifacts

The initial scaffold has no asset extraction. Future versions may add images, snapshots, and browser captures as explicit local artifacts.
