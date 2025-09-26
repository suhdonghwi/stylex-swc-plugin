import vue from '@vitejs/plugin-vue'
import styleXRSPlugin from '@stylexswc-toss/unplugin/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
  },
  plugins: [
    vue(),
    styleXRSPlugin({
      pageExtensions: ['tsx', 'jsx', 'js', 'ts', 'vue'],
      rsOptions: {
        dev: true,
        useCSSLayers: true,
        treeshakeCompensation: true,
      },
    }),
  ],
})