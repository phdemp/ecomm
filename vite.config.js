import { defineConfig } from "vite";

export default defineConfig({
  publicDir: "assets",
  server: {
    open: false,
    port: 5173,
    strictPort: false
  },
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
});
