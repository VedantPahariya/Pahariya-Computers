import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['lucide-react'], // Change from exclude to include
  },
  // build: {
  //   commonjsOptions: {
  //     include: [/lucide-react/, /node_modules/],
  //   },
  // },
  server: {
    open: true, // Automatically open the app in the browser
  },
});
