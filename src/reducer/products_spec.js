import { expect } from 'chai';
import { List, Map, fromJS } from 'immutable';
import { createStore } from 'redux'
import productsReducer from './products'
import { addProductActionCreator } from '../actions'

describe('products', () => {

    var store;

    it('initial state is an empty object', () => {
        store = createStore(productsReducer)
        expect(fromJS(store.getState())).to.eql(Map());
    });

    describe('reducer', () => {
        it('can add a product', () => {
            store.dispatch(addProductActionCreator({id: 1, description: 'product 1'}))
            expect(fromJS(store.getState())).to.eql(fromJS({'1': {'id': 1, 'description': 'product 1'}}));

            store.dispatch(addProductActionCreator({id: 2, description: 'product 2'}))
            expect(fromJS(store.getState())).to.eql(fromJS({'1': {'id': 1, 'description': 'product 1'}, '2': {'id': 2, 'description': 'product 2'}}));
        });
    });

});
