import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react()],
  // optimizeDeps: {
  //   exclude: ['lucide-react'],
  // },
  base: '/speechifyy/', // Replace <repository-name> with your GitHub repository name
  plugins: [react()],
});
