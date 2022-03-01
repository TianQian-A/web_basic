import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

console.log(import.meta.env, process.env)
// https://vitejs.dev/config/
export default defineConfig(({mode, dev}) => {
  return {
    plugins: [vue()],
    base: mode === 'development' ? './' : '/',
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }
})
