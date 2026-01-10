import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // هذا السطر يغنينا عن كتابة --base في Netlify
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
