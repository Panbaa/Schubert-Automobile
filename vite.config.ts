import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    proxy: {
      '/api': {
        target: 'https://services.mobile.de',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            proxyReq.setHeader('Accept', 'application/xml');
          });
        },
      },
      '/api/mobile-de/cars': {
        target: 'https://services.mobile.de/search-api/search',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/mobile-de\/cars/, ''),
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            proxyReq.setHeader('Accept', 'application/vnd.de.mobile.api+json');
          });
        },
      },
    },
  },
});
