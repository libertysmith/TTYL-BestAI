// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/TTYL-BestAI/",
  },

  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts.
    // Nitro/Vite uses this during the build.
    server: { entry: "server" },

    // Static GitHub Pages output: every public page is prerendered
    // to HTML at build time.
    pages: [
      { path: "/" },
      { path: "/opt-in" },
      { path: "/privacy" },
      { path: "/terms" },
    ],

    prerender: {
      enabled: true,
      autoStaticPathsDiscovery: false,
    },
  },
});
