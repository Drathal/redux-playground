export default {
    'endpoint': {
        'productApi': process.env.NODE_ENV === 'production' ? '/api/product' : '//localhost:3000/api/product'
    }
}
