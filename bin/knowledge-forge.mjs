#!/usr/bin/env node
import { captureHtmlFile } from "../src/capture/capture-html-file.mjs";

const [command, ...args] = process.argv.slice(2);

try {
  if (command === "capture-file") {
    const inputFile = args[0];
    const outDir = readOption(args, "--out");
    const sourceUrl = readOption(args, "--source-url");
    const result = await captureHtmlFile({ inputFile, outDir, sourceUrl });
    process.stdout.write(`${JSON.stringify({
      manifestPath: result.manifestPath,
      notePath: result.notePath,
      sourcePath: result.sourcePath,
      title: result.manifest.title
    }, null, 2)}\n`);
  } else {
    printUsage();
    process.exitCode = command ? 1 : 0;
  }
} catch (error) {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
}

function readOption(args, name) {
  const index = args.indexOf(name);
  if (index === -1 || !args[index + 1]) {
    throw new Error(`${name} is required`);
  }
  return args[index + 1];
}

function printUsage() {
  process.stdout.write(`Knowledge Forge v0.1

Usage:
  knowledge-forge capture-file <input.html> --out <dir> --source-url <url>

Example:
  knowledge-forge capture-file fixtures/simple-article/input.html --out .tmp/capture --source-url https://example.com/maintainer-thread
`);
}
