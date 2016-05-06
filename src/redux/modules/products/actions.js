export const ADD_PRODUCT = 'product/ADD_PRODUCT';
export const DELETE_PRODUCT = 'product/DELETE_PRODUCT';

export const addProduct = (product) => {
    console.log('addProduct #1', product)
    return { type: ADD_PRODUCT, product }
}

export const deleteProduct = (id) => {
    console.log('deleteProduct #1', id)
    return { type: DELETE_PRODUCT, id }
}
