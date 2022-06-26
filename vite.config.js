import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://utsutroll.github.io/react-rick-y-morty-api/',
  plugins: [react()]
})
