import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/subdirectory-path/', // Replace with your subdirectory path if needed
})