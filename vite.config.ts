import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Global SCSS
        additionalData: `@use '/src/styles/global.scss' as *;`,
      },
    },
  },
});
