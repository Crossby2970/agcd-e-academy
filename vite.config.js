import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages serves this as a project site under /agcd-e-academy/;
  // local dev keeps serving from root.
  base: command === 'build' ? '/agcd-e-academy/' : '/',
  plugins: [react(), tailwindcss()],
}))
