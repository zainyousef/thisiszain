import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  base: '/thisiszain/', // Replace 'thisiszain' with your repository name
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory
  },
});