import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: false,
    host: "0.0.0.0",
    port: 8080,
    secure: false,
    strictPort: true,
    hmr: {
      port: 8080,
      host: "192.168.1.104",
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
