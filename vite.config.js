import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  
  base:'/AlphaBeatShopFrontsShutterLtd/',
  plugins: [react()],
  server: {
    host: true,
    port: 80,
}
})
