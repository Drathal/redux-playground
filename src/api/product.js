import axios from 'axios';

// only a quick hack ;D
const prodEndpoint = process.env.NODE_ENV === 'production' && '/api/product'
const devEndpoint = process.env.NODE_ENV !== 'production' && '//localhost:3000/api/product'

export function getProducts(endpoint = prodEndpoint || devEndpoint) {
    return axios.get(endpoint)
        .then(response => {
            return response;
        });
}
