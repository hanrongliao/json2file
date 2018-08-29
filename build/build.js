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
        test: '/\.js$/',
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
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    library: 'webpackTest',
    libraryTarget: 'umd',
    libraryExport: 'default'
  }
}

console.log('build start!\n')

webpack(webpackConfig, () => {
  console.log('build complete!\n')
})