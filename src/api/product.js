import axios from 'axios';

// todo: remove localhost and add host env var
export function getProducts(endpoint = '//localhost:3000/api/product') {
    return axios.get(endpoint)
        .then(response => {
            return response;
        });
}
