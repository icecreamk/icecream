const path = require('path')
const {merge} = require('webpack-merge');
const webpack = require('webpack')

const commonConfig = require('./webpack.common.config.js');

const devConfig = {
  devtool: 'inline-source-map',
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js'),
    ],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux'],
  },
  output: {
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      MOCK: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    // color（CLI only） console中打印彩色日志 在命令行中使用 --color --progress
    // historyApiFallback 任意的404响应都被替代为index.html
    // host 指定一个host,默认是localhost。如果你希望服务器外部可以访问，指定如下：host: "0.0.0.0"。比如你用手机通过IP访问。
    // hot 启用Webpack的模块热替换特性(每次修改不用刷新页面而是局部更新)。
    // proxy 代理。比如在 localhost:3000 上有后端服务的话，你可以这样启用代理：
    port: 8080,
    // URL的根目录。不设定则默认指向项目根目录。
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true
  }
}

module.exports = merge(commonConfig, devConfig);