import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Makes global variables from the browser environment available
    environment: 'jsdom', // Sets the test environment to jsdom (browser-like)
  },
})
