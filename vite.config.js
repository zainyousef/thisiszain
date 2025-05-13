import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import ghPages from 'vite-plugin-gh-pages';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/thisiszain/' : '/',
  plugins: [react(), ghPages()],
}));
