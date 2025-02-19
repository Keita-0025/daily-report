import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))
// import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  build: {
    watch: {
      include: 'src/**', // 監視するファイル
      exclude: 'node_modules/**', // 除外するファイル
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'history.html'),
      },
    },
  },
})
