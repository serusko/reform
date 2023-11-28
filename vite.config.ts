import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import eslint from 'vite-plugin-eslint';
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: { entry: resolve(__dirname, 'lib/index.ts'), formats: ['es'] },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
      output: { entryFileNames: 'index.js' },
    },
    sourcemap: true,
  },
  plugins: [visualizer(), react(), eslint(), dts({ copyDtsFiles: true, include: ['lib'] })],
});
