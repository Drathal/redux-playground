import axios from 'axios';

export function getProducts(endpoint) {
    return axios.get(endpoint)
        .then(response => {
            return response;
        });
}
