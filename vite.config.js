import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // لا تضف أي مسارات هنا، اتركه افتراضياً
})
