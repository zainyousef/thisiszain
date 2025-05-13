import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/thisiszain/' : '/', // Replace 'thisiszain' with your repo name
  plugins: [react(), ghPages()],
}));
