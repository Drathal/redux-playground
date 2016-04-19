import { expect } from 'chai';
import makeStore from './store'
import * as productAction from '../redux/modules/products/actions';

describe('store', () => {

    const product1 = {'id': 1, 'description': 'product 1'}
    const product2 = {'id': 2, 'description': 'product 2'}
    const product3 = {'id': 3, 'description': 'product 3'}

    it('can dispatch actions', () => {

        const store = makeStore();
        const stateBefore = {products: []}
        const stateAfter = {products: [{...product1}, {...product2}]}

        expect(store.getState()).to.deep.equal(stateBefore)

        store.dispatch(productAction.addProduct(product1))
        store.dispatch(productAction.addProduct(product2))
        store.dispatch(productAction.addProduct(product2))
        store.dispatch(productAction.addProduct(product3))
        store.dispatch(productAction.deleteProduct(3))


        expect(store.getState()).to.deep.equal(stateAfter)

    });

});
