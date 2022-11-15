import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // for this i need @types/node
    alias: {
      '@app': path.resolve(__dirname, './src'), // here i set @app, now i don need @app/*, only @app
    },
  },
  plugins: [react()],
  server: {
    port: 3000,
  },
});
