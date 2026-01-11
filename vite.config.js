import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // هذا السطر يضمن أن Vite يرى الملف في مكانه الحالي
  root: "./", 
  build: {
    outDir: "dist",
  }
});
