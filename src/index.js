import makeStore from './app/store'
import { addProduct, deleteProduct } from './redux/modules/products/actions';
import { addCartItem } from './redux/modules/cart/actions';

const store = makeStore();
console.log('-------------------------\nstore init state', store.getState());

store.subscribe(function() {
    console.log('-------------------------\nstore state:', store.getState());
})

store.dispatch(addProduct({id: 1, description: 'product 1'}))
store.dispatch(addProduct({id: 2, description: 'product 2'}))
store.dispatch(addProduct({id: 2, description: 'product 2'}))
store.dispatch(addProduct({id: 3, description: 'product 3'}))

store.dispatch(addCartItem(2))
store.dispatch(addCartItem(2))
store.dispatch(addCartItem(1))
store.dispatch(addCartItem(1))
store.dispatch(addCartItem(1))

store.dispatch(deleteProduct(1))
