// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  root: '.', // where your index.html is located
  base: '', // relative path for local file loading
  server: {
    port: 3000,
    open: true, // auto-opens in browser
  },
  build: {
    outDir: 'dist', // output directory
    emptyOutDir: true, // clean outDir before build
  },
})
