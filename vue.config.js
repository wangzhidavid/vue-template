'use strict'
const path = require('path')
const defaultSettings = require('./src/config/index.js')

const resolve = dir => path.join(__dirname, dir)
// page title
const name = defaultSettings.title || 'vue template'
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

module.exports = {
  publicPath: './', // 署应用包时的基本 URL。 vue-router hash 模式使用
  //  publicPath: '/app/', //署应用包时的基本 URL。  vue-router history模式使用
  outputDir: 'dist', //  生产环境构建文件的目录
  assetsDir: 'static', //  outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: !IS_PROD,
  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  devServer: {
    port: 9000, // 端口
    open: false, // 启动后打开浏览器
    overlay: {
      //  当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
      warnings: false,
      errors: true
    }
    // proxy: {
    //   //配置跨域
    //   '/api': {
    //       target: "https://test.xxx.com",
    //       // ws:true,
    //       changOrigin:true,
    //       pathRewrite:{
    //           '^/api':'/'
    //       }
    //   }
    // }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    }
  },
  css: {
    extract: IS_PROD, //是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
    sourceMap: false,
    loaderOptions: {
      less: {
        // 向全局sass样式传入共享的全局变量
        // 详情: https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
        prependData: `
          @import "assets/css/mixin.less";
          @import "assets/css/variables.less";
          `
      }
    }
  },
}






// module.exports = {
//   pluginOptions: {
//     'style-resources-loader': {
//       preProcessor: 'less',
//       patterns: []
//     }
//   }
// }
