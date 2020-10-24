const path = require('path')
const webpack = require('webpack')
const {merge} = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonConfig = require('./webpack.common.config.js');

const publicConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    entry: {
        app: [
          'babel-polyfill',
          path.join(__dirname, 'src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', { 
              loader: 'css-loader', 
              options: {modules: {localIdentName: '[local]-[hash:base64:5]'}
            }
          }, 'postcss-loader']
        }, {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }]
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['*.*'],
      }),
      new UglifyJSPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
         }
     })
    ]
}

module.exports = merge(commonConfig, publicConfig);