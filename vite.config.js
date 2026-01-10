import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  // هذا السطر يخبر Vite أين يبحث عن index.html بدقة
  root: './', 
  build: {
    rollupOptions: {
      input: {
        // إذا كان الملف في المجلد الرئيسي استخدم:
        main: resolve(__dirname, 'index.html'),
        // إذا كان لا يزال داخل demo استخدم السطر التالي بدلاً من السابق:
        // main: resolve(__dirname, 'demo/index.html'),
      }
    }
  }
})
