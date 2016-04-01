import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { Provider } from 'react-redux'

import makeStore from '../app/store'
import App from './App'
import ProductContainer from '../containers/ProductsContainer'

describe('container <App  />', () => {

    it('can render the App container ', () => {
        let store = makeStore();
        let jsx = <Provider store={ store }>
                      <App />
                  </Provider>

        expect(mount(jsx).find('h1').length).to.equal(1);
        expect(mount(jsx).find(ProductContainer).length).to.equal(1);
    });

});
