const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

process.env.NODE_ENV = 'production'

const webpackConfig = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src', 'main.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'),
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '..')
    }),
  ],
  externals: {
    "xlsx/dist/xlsx.core.min": 'XLSX',
    "file-saverjs": 'saveAs'
  },
  output: {
    filename: 'json2filejs.min.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    library: 'json2filejs',
    libraryTarget: 'umd',
    libraryExport: 'default'
  }
}

console.log('build start!\n')

webpack(webpackConfig, () => {
  console.log('build complete!\n')
})