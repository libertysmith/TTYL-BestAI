import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The site is served from https://libertysmith.github.io/TTYL-BestAI/
// so every built asset URL must be prefixed with this repository subpath.
export default defineConfig({
  base: "/TTYL-BestAI/",
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
