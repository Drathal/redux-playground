import { expect } from 'chai';
import deepFreeze from 'deep-freeze'

import cartReducer from './index'
import * as actions from './actions'

describe('cart', () => {

    it('can add an item', () => {

        const stateBefore = {items: [], quantityById: {}}
        const action = actions.addItem(1)
        const stateAfter = {items: [1], quantityById: {1: 1}}

        deepFreeze(stateBefore)
        deepFreeze(action)

        expect(stateAfter).to.deep.equal(cartReducer(stateBefore, action))

    });

    it('can add an existing item', () => {

        const stateBefore = {items: [1], quantityById: {1: 1}}
        const action = actions.addItem(1)
        const stateAfter = {items: [1], quantityById: {1: 2}}

        deepFreeze(stateBefore)
        deepFreeze(action)

        expect(stateAfter).to.deep.equal(cartReducer(stateBefore, action))

    });

    it('can delete an item', () => {

        const stateBefore = {items: [1, 2], quantityById: {1: 2, 2: 1}}
        const action = actions.deleteItem(1)
        const stateAfter = {items: [2], quantityById: {2: 1}}

        deepFreeze(stateBefore)
        deepFreeze(action)

        expect(stateAfter).to.deep.equal(cartReducer(stateBefore, action))

    });

    it('can not delete a non existing item', () => {

        const stateBefore = {items: [1], quantityById: {1: 1}}
        const action = actions.deleteItem(2)
        const stateAfter = {items: [1], quantityById: {1: 1}}

        deepFreeze(stateBefore)
        deepFreeze(action)

        expect(stateAfter).to.deep.equal(cartReducer(stateBefore, action))

    });

    it('can increment item quantity', () => {

        const stateBefore = {items: [1], quantityById: {1: 1}}
        const action = actions.incrementQuantity(1)
        const stateAfter = {items: [1], quantityById: {1: 2}}

        deepFreeze(stateBefore)
        deepFreeze(action)

        expect(stateAfter).to.deep.equal(cartReducer(stateBefore, action))

    });

    it('can decrement item quantity', () => {

        const stateBefore = {items: [1], quantityById: {1: 2}}
        const action = actions.decrementQuantity(1)
        const stateAfter = {items: [1], quantityById: {1: 1}}

        deepFreeze(stateBefore)
        deepFreeze(action)

        expect(stateAfter).to.deep.equal(cartReducer(stateBefore, action))

    });

    it('REMOVE_FROM_CART', () => {

        const stateBefore = {items: [1], quantityById: {1: 2}}
        const action = actions.removeItem(1)
        const stateAfter = {items: [1], quantityById: {1: 1}}

        deepFreeze(stateBefore)
        deepFreeze(action)

        expect(stateAfter).to.deep.equal(cartReducer(stateBefore, action))

    });

    it('REMOVE_FROM_CART 2', () => {

        const stateBefore = {items: [1], quantityById: {1: 1}}
        const action = actions.removeItem(1)
        const stateAfter = {items: [], quantityById: {}}

        deepFreeze(stateBefore)
        deepFreeze(action)

        expect(stateAfter).to.deep.equal(cartReducer(stateBefore, action))

    });

});
