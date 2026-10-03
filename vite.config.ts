import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
  define: {
    'process.env': {}
  },
  server: {
    port: 3000,
    open: true
  }
});
