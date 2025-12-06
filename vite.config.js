import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Ensure all entry points are covered
      },
      output: {
        assetFileNames: ({ name }) => {
          // Preserve the folder structure for assets
          if (/\.\w+$/.test(name ?? '')) {
            return 'assets/[name].[ext]';
          }
          return '[name].[ext]';
        }
      }
    }
  }
})
