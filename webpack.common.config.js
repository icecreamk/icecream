const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const commonConfig = {
    output: {
      publicPath : '/',
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      path: path.join(__dirname, './dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    plugins: [
      new HtmlWebpackPlugin({
          title: 'icecream',
          filename: 'index.html',
          template: path.join(__dirname, 'src/index.html')
      }),
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'initial',
            name: 'vendor',
            test: 'vendor',
            enforce: true
          }
        }
      }
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers')
        }
    }
}
module.exports = commonConfig;