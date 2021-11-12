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
  css: {
    preprocessorOptions: {
      // 设置全局可调用的样式
      scss: {
        additionalData: '@import "./src/styles/public.scss";'
      }
    }
  },
  // 静态文件目录, 引用img图片的时候得用绝对路径：./images/xxx.png
  publicDir: 'src/static',
  // 文件资源的根目录
  base: './',
  plugins: [
    reactRefresh(),
    gzipPlugin(),
    /* 
    * legacy的文件不知道咋配打包后的目录，目前他一个跑到assets文件夹下了，一个在js目录下，搞不懂
    * legacy的文件没有gz文件啊，为啥啊，伤脑筋
    */
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
    // 自定义插件调用的方式
    // mocks(),
    // 运行时的代码检测，但是无效，反正我提交的时候做了husky校验，这里不行就不行吧
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
        // 拆分包
        // manualChunks(id) {
        //   if (id.includes('node_modules')) {
        //     return 'vendor'
        //   }
        // }
      }
    },
    /*
    * 毙了狗了，如果我直接从static目录下以./images/xxx.png的方式引用图片
    * 压根就他喵的不会被打成base64, 他是必须是用import的方式去引入图片
    * 才能按照assetsInlineLimit的限制去打成base64, 才能产出带hash地址的图片地址
    */
    assetsInlineLimit: 100000
  },
  /* 
  * 其实这里只要全局注入后其他地方就可以不用手动注入了
  * 但是ts检测里是会报错的。。为了不影响开发时的感官，就不用这种全局注入的模式了
  * 挺可惜的，要是ts也能检测到全局注入的依赖就好了
  */
  // esbuild: {
  //   jsxInject: `import React, { FC, useState, useEffect, useContext, useReducer } from 'react'`
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})