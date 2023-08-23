import { defineConfig } from 'vite';

import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  server: {
    port: 4001,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
      '/images': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [reactRefresh()],
});
