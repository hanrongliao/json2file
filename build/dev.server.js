const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./dev.config')

const app = express()
const compiler = webpack(webpackConfig)
const hotMiddleware = webpackHotMiddleware(compiler, {
  log: false,
  heartbeat: 2000
})

// webpack 服务
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
}))

// 热更新
app.use(hotMiddleware)

app.listen(8001, () => {
  console.log('develop server is running on port 8001!\n')
})