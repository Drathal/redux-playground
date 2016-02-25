import { render } from 'prettyjson';

import makeStore from './app/store'
import * as productAction from './redux/modules/products/actions';
import * as cartAction from './redux/modules/cart/actions';

const store = makeStore();

store.dispatch(productAction.addProduct({id: 1, description: 'product 1'}))
store.dispatch(productAction.addProduct({id: 2, description: 'product 2'}))
store.dispatch(productAction.addProduct({id: 2, description: 'product 2'}))
store.dispatch(productAction.addProduct({id: 3, description: 'product 3'}))

store.dispatch(cartAction.addItem(2))
store.dispatch(cartAction.addItem(2))
store.dispatch(cartAction.addItem(1))
store.dispatch(cartAction.addItem(1))
store.dispatch(cartAction.addItem(1))

store.dispatch(productAction.deleteProduct(3))

store.dispatch(cartAction.decrementQuantity(1))
