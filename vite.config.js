// Brings in tools for turning a file location into a normal folder path
import { fileURLToPath, URL } from 'node:url'
// Brings in Vite's helper for writing the settings file
import { defineConfig } from 'vite'
// Brings in the plugin that lets Vite understand React code
import react from '@vitejs/plugin-react'
// Brings in the plugin that makes Tailwind CSS work with Vite
import tailwindcss from '@tailwindcss/vite'

// Exports the settings Vite uses when running and building the project
export default defineConfig({
  // Use relative paths so the site works at the top level or inside any folder on the server
  base: './',
  // List of plugins Vite should use: React first, then Tailwind
  plugins: [react(), tailwindcss()],
  // Settings for how Vite finds files in import lines
  resolve: {
    // Shortcuts for folder paths
    alias: {
      // Makes "@" mean the src folder, so "@/components" = "src/components"
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})