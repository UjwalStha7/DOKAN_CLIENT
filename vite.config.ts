import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ], 
  server: {
    host: true, // This exposes the server to the local network
    port: 5173, 
    strictPort: true,
    watch: {
      usePolling: true, // 👈 This forces Vite to constantly check for changes
    },
  }
})

