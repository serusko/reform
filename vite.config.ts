import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ["lib"], copyDtsFiles: true })],
  build: {
    lib: { entry: resolve(__dirname, "lib/main.ts"), formats: ["es"] },
    copyPublicDir: false,
    rollupOptions: {
      external: ["react", "react/jsx-runtime"]
    }
  }
});
