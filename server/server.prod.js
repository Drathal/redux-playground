'use strict';

var path = require('path')
var express = require('express');
var app = new express()
var port = 8080

app.get('/api/product', (req, res) => res.sendFile(path.join(__dirname, '/../server/products.json')))

app.use('/build', express.static(path.join(__dirname, '/')));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

app.listen(port, error => {
    if (error) {
        console.error(error)
    } else {
        console.info('==> Application running at port %s', port)
    }
})
