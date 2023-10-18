import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Define your entry point (e.g., src/main.js)
      input: 'src/main.jsx', // Replace with your actual entry point
    },
  },
})
