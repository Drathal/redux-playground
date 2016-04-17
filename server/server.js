'use strict';

var path = require('path')
var fs = require('fs')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('../webpack.config')

var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler))

app.get('/api/product', function(req, res) {
    res.sendFile(path.join(__dirname, '/../server/products.json'))
})

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/../src/app/index.html'))
})

app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info('==> Open up http://localhost:%s/ in your browser.', port)
    }
})
