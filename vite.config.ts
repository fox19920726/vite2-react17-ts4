import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import legacy from '@vitejs/plugin-legacy'
// import { eslint } from 'rollup-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
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
    }),
    // {
    //   ...eslint({
    //     include: 'src/*.tsx',
    //     rules: {}
    //   }),
    //   enforce: 'pre'
    // }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})