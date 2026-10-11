// Creates a static HTML entry point for each route in dist/.
//
// GitHub Pages serves files directly and has no rewrite rules, so a request for
// /TTYL-BestAI/opt-in/ must find dist/opt-in/index.html. Each copy is the same
// app shell; the React app reads the URL and renders the matching page.
// dist/404.html is also the shell, so unknown paths still load the app.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const distDir = "dist";
const shell = join(distDir, "index.html");

if (!existsSync(shell)) {
  throw new Error("dist/index.html is missing. Run `vite build` before this script.");
}

const routeDirs = ["opt-in", "privacy", "terms"];

for (const dir of routeDirs) {
  const target = join(distDir, dir);
  mkdirSync(target, { recursive: true });
  copyFileSync(shell, join(target, "index.html"));
}

copyFileSync(shell, join(distDir, "404.html"));

console.log(`Static route entry points written: ${routeDirs.map((d) => `/${d}/`).join(", ")}, 404.html`);
