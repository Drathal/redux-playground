import register from 'ignore-styles'
register(['.sass', '.scss', '.css', '.png', '.jpg', '.gif', '.svg'])

if (!process.env.NODE_ENV && !process.env.BABEL_ENV) {
    process.env.NODE_ENV = process.env.BABEL_ENV = 'test'
}

var path = require('path')
var jsdom = require('jsdom').jsdom;

var pe = require('pretty-error').start()
pe.skipPackage('mocha', 'babel-register')
pe.skipNodeFiles()
pe.skipPath('internal/module.js');

var exposedProperties = ['window', 'navigator', 'document']

global.document = jsdom('')
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {userAgent: 'node.js'}
