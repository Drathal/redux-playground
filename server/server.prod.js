'use strict';

var path = require('path')
var fs = require('fs')
var express = require('express');
var app = new express()
var port = 80

app.get('/api/product', function(req, res) {
    res.sendFile(path.join(__dirname, '/../server/products.json'))
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.use('/build', express.static(path.join(__dirname, '/')));

app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info('==> Application running at port %s', port)
    }
})
