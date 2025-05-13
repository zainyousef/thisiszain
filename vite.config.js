import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ghPages } from 'vite-plugin-gh-pages';

// https://vite.dev/config/
export default defineConfig({
  base: '/thisiszain/', // Replace 'thisiszain' with your repository name
  plugins: [react(), ghPages()],
  build: {
    outDir: 'dist', // Specify the output directory
  },
});