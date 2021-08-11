import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import legacy from '@vitejs/plugin-legacy'
import gzipPlugin from 'rollup-plugin-gzip'
// import { mocks } from './src/plugins/index'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  // css: {
  //   preprocessorOptions: {
  //     // less: {
  //     //   javascriptEnabled: true,
  //     // }
  //     scss: {
  //       additionalData: `$injectedColor: orange;`
  //     }
  //   }
  // },
  // 静态文件目录
  publicDir: 'src/static',
  plugins: [
    reactRefresh(),
    gzipPlugin(),
    legacy({
      targets: [
        'last 1 version',
        'maintained node versions',
        'not dead',
        'defaults',
        'ie > 6',
        'last 2 versions',
        '> 1%',
        'iOS 7',
        'last 3 iOS versions'
      ]
    })
    // mocks(),
    // {
    //   ...eslint({
    //     include: 'src/*.tsx',
    //     rules: {}
    //   }),
    //   enforce: 'pre'
    // }
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames: 'js/[name].[hash].js',
        assetFileNames: 'css/[name].[hash].[ext]'
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})