const path = require('path')
const toml = require('toml')
const yamljs = require('yamljs')
const json5 = require('json5')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        /** 链式调用，将上一次的结果传递给下一个loader */
        use: ['style-loader', 'css-loader']
      },
      /** 处理所遇到的图片 */
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      /**处理字体 */
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      /** 处理数据 */
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
      /** 将部分数据转成json格式*/
      {
        test: /\.toml$/i,
        type: 'json',
        parser: {
          parse: toml.parse // 配合type = json 使用，使用内置方法
        }
      },
      {
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          parse: yamljs.parse // 配合type = json 使用，使用内置方法
        }
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse // 配合type = json 使用，使用内置方法
        }
      }
    ]
  }
}