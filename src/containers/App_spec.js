import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { Provider } from 'react-redux'

import makeStore from '../app/store'
import App from './App'
import * as productAction from '../redux/modules/products/actions';

describe('container <App  />', () => {

    it('can render the App container ', () => {
        let store = makeStore();
        const wrapper = render(<Provider store={ store }>
                                   <App/>
                               </Provider>);
        expect(wrapper.html()).to.equal('<div><h1>My Redux Playground</h1><div><h3>My Products</h3><div><button>ADD RANDOM PRODUCT</button></div></div></div>')

    });

    it('can render the App container with ProductList', () => {
        let store = makeStore();
        store.dispatch(productAction.addProduct({'id': 1, 'description': 'product 1'}))
        const wrapper = render(<Provider store={ store }>
                                   <App/>
                               </Provider>);
        expect(wrapper.html()).to.equal('<div><h1>My Redux Playground</h1><div><h3>My Products</h3><div><p>1 &#xA0;-&#xA0;product 1<button>x</button></p><button>ADD RANDOM PRODUCT</button></div></div></div>')

    });

});
