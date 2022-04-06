const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
console.log(path.resolve(__dirname) + '----------')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'cheap-module-source-map',
  externals: {
    jquery: 'jQuery'
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      minify: {
        // 移除注释
        removeComments: true
      }
    }),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, 'dll/manifest.json')
    }),
    new AddAssetHtmlPlugin([
      {
        filepath: require.resolve(path.resolve(__dirname, 'dll/jquery.js')),
        publicPath: '../dll',
        outputPath: 'vendor',
      }
    ]),
  ],
  devServer: {
    compress: true,
    port: 8088,
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/assets': path.resolve(__dirname, 'src/assets')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['file-loader'],

      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ]
      },
      { test: /\.(gif|png|jpg|jpeg)/, type: 'asset' },

    ]
  },
}

