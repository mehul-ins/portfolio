import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Adjust if deploying in a subdirectory
  build: {
    outDir: 'dist' // The default output directory for Vercel
  }
});
