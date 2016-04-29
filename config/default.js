const nconf = require('nconf');

const config = {
    'endpoint': {
        'productApi': process.env.NODE_ENV === 'production' ? '/api/product' : '//localhost:3000/api/product'
    }
}

nconf.defaults(config);

module.exports = nconf.get();
