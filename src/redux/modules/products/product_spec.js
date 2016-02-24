import { expect } from 'chai';
import deepFreeze from 'deep-freeze'

import productsReducer from './index'
import { addProduct, deleteProduct } from './actions'

describe('products', () => {

    const product1 = {'id': 1, 'description': 'product 1'};
    const product2 = {'id': 2, 'description': 'product 2'};

    it('can add products', () => {

        const stateBefore = {items: {}, quantity: 0}
        const action1 = addProduct(product1)
        const action2 = addProduct(product2)
        const stateAfter1 = {items: {1: product1}, quantity: 1}
        const stateAfter2 = {items: {1: product1, 2: product2}, quantity: 2}

        deepFreeze(stateBefore)
        deepFreeze(action1)
        deepFreeze(action2)

        expect(productsReducer(stateBefore, action1)).to.deep.equal(stateAfter1)
        expect(productsReducer(stateAfter1, action2)).to.deep.equal(stateAfter2)

    });

    it('can delete a product', () => {

        const stateBefore = {items: {1: product1}, quantity: 1}
        const action = deleteProduct(1)
        const stateAfter = {items: {}, quantity: 0}

        deepFreeze(stateBefore)
        deepFreeze(action)

        expect(productsReducer(stateBefore, action)).to.deep.equal(stateAfter)

    });

});
