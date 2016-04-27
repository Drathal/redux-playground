'use strict';

var path = require('path')
var fs = require('fs')
var webpack = require('webpack')
var express = require('express')
var proxy = require('proxy-middleware');
var url = require('url');
var WebpackDevServer = require('webpack-dev-server')
var config = require('../webpack.config')
var port = 3000

var app = new express()
var appHot = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    quiet: true,
    noInfo: true,
    historyApiFallback: true,
    stats: {
        colors: true
    }
})

app.use('/build', proxy(url.parse('http://localhost:' + (port + 1) + '/build')));


app.get('/api/product', function(req, res) {
    res.sendFile(path.join(__dirname, '/../server/products.json'))
})

app.use('/coverage', express.static(path.join(__dirname, '/../coverage')));

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

appHot.listen(port + 1, 'localhost', function() {})
