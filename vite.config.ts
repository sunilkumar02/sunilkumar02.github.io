import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/sunilkumar02.github.io/', 
  build: {
    outDir: 'dist', 
  },
  server: {
    port: 3000,
    open: true
  }
})
