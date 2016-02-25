// todo: make unit test out of this
import { render } from 'prettyjson';

import makeStore from './app/store'
import * as productAction from './redux/modules/products/actions';
import * as cartAction from './redux/modules/cart/actions';

const store = makeStore();

// adding some products
store.dispatch(productAction.addProduct({id: 1, description: 'product 1'}))
store.dispatch(productAction.addProduct({id: 2, description: 'product 2'}))
store.dispatch(productAction.addProduct({id: 2, description: 'product 2'}))
store.dispatch(productAction.addProduct({id: 3, description: 'product 3'}))

// add products to cart
store.dispatch(cartAction.addItem(2))
store.dispatch(cartAction.addItem(2))
store.dispatch(cartAction.addItem(1))
store.dispatch(cartAction.addItem(1))
store.dispatch(cartAction.addItem(1))

// remove product from products
store.dispatch(productAction.deleteProduct(3))

// decrement product quantity in cart
store.dispatch(cartAction.decrementQuantity(1))
