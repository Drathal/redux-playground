import { createStore } from 'redux'
import checkoutReducer from './reducer/checkout'

var store_0 = createStore(checkoutReducer)

store_0.subscribe(function() {
    console.log('\nstore_0 state:', store_0.getState());
})

var addProductActionCreator = function(product) {
    return {type: 'ADD_PRODUCT', product}
}

var addToCartActionCreator = function(productId) {
    return {type: 'ADD_TO_CART', productId}
}

store_0.dispatch(addProductActionCreator({id: 1, description: 'product 1'}))
store_0.dispatch(addProductActionCreator({id: 2, description: 'product 2'}))
store_0.dispatch(addProductActionCreator({id: 2, description: 'product 2'}))
store_0.dispatch(addProductActionCreator({id: 3, description: 'product 3'}))

store_0.dispatch(addToCartActionCreator(2))
store_0.dispatch(addToCartActionCreator(2))
store_0.dispatch(addToCartActionCreator(1))
store_0.dispatch(addToCartActionCreator(1))
store_0.dispatch(addToCartActionCreator(1))
