import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({ registerType: 'autoUpdate' })
  ],
})



