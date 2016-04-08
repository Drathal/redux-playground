import axios from 'axios';

export function getProducts(endpoint = 'http://localhost:3000/products') {
    return axios.get(endpoint)
        .then(response => {
            return response;
        });
}
