const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    // 多入口
    index: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
}


// 防止重复
// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// module.exports = {
//   mode: 'development',
//   entry: {
//     // 多入口
//     index: './src/index.js',
//     another: './src/another-module.js'
//     // 防止重复
//     // index: {
//     //   import: './src/index.js',
//     //   dependOn: 'shared'
//     // },
//     // another: {
//     //   import: './src/another-module.js',
//     //   dependOn: 'shared',
//     // },
//     // shared: 'lodash'
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: '管理输出'
//     })
//   ],
//   output: {
//     /**
//      * 此时 如果index和another-module共同引用了lodash 打包后的bundle 都会重复的引用
//      * 解决这个问题可以采用 dependOn 选项
//      */
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     clean: true
//   },
//   optimization: {
//     // runtimeChunk: 'single'
//     splitChunks: {
//       chunks: 'all'
//     }
//   }
// }