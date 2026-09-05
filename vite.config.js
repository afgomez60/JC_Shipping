import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/JC_Shipping/' : '/',
  test: {
    environment: 'jsdom',
    setupFiles: './test/setup.js',
  },
});
