const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-number.js',
    // 作为引用的变量 此方法只支持script的引用
    globalObject: 'this',// type umd 时必须声明
    library: {
      name: 'webpackNumbers',
      type: 'umd'
    },
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
}