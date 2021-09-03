import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from '@rollup/plugin-alias'
import path from 'path'

const projectRootDir = path.resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [alias(), vue()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(projectRootDir, 'src') },
      { find: 'components', replacement: path.resolve(projectRootDir, 'src/components') },
    ]
  }
})
