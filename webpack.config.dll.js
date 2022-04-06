const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: {
    jquery: ['jquery'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dll'),
    library: '[name]_[hash]'
  },
  plugins: [
    // 打包生成一个 manifest.json --> 提供和jquery映射
    new webpack.DllPlugin({
      // 映射库的暴露的内容名称 和 library 相同
      name: '[name]_[hash]',
      path: path.join(__dirname, 'dll/manifest.json'),
    })
  ],
  mode: 'production',
};