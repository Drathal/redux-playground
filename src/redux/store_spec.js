import { expect } from 'chai';
import makeStore from '../app/store'
import * as productAction from './modules/products/actions';
import * as cartAction from './modules/cart/actions';

describe('store', () => {

    const product1 = {'id': 1, 'description': 'product 1'};
    const product2 = {'id': 2, 'description': 'product 2'};
    const product3 = {'id': 3, 'description': 'product 3'};

    it('can dispatch cart and product actions', () => {

        const store = makeStore(false);

        const stateBefore = {
            products: {
                items: {},
                quantity: 0
            },
            cart: {
                items: [],
                quantityById: {}
            }
        }

        const stateAfter = {
            products: {
                items: {'1': product1, '2': product2},
                quantity: 2
            },
            cart: {
                items: [2, 1],
                quantityById: {'1': 2, '2': 2}
            }
        }

        expect(store.getState()).to.deep.equal(stateBefore)

        // adding some products
        store.dispatch(productAction.addProduct(product1))
        store.dispatch(productAction.addProduct(product2))
        store.dispatch(productAction.addProduct(product2))
        store.dispatch(productAction.addProduct(product3))

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

        expect(store.getState()).to.deep.equal(stateAfter)

    });

});
