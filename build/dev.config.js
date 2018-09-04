const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src', 'main.js'),
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../demo', 'index.html')
    })
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    library: 'Json2File',
    libraryTarget: 'umd',
    libraryExport: 'default'
  }
}


