import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite-react-ssg reads this config; the SSG entry is src/main.jsx.
// Note: helmet/router internals are owned by vite-react-ssg — we do NOT bundle
// our own react-helmet-async, so the SSG head-collection context matches.
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true,
  },
  // vite-react-ssg build options.
  ssgOptions: {
    // /pami-glow -> dist/pami-glow/index.html for clean, server-agnostic URLs.
    dirStyle: 'nested',
    // critters inlines critical CSS into each prerendered page (default on).
    formatting: 'none',
  },
})
