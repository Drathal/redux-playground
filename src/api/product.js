import axios from 'axios';

// todo: remove localhost and add host env var
export function getProducts(endpoint = '//localhost:3000/products') {
    return axios.get(endpoint)
        .then(response => {
            return response;
        });
}
