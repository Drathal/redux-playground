import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { Provider } from 'react-redux'

import makeStore from '../app/store'
import ProductsContainer from '../containers/ProductsContainer'
import ProductsList from '../components/ProductsList'

describe('container <ProductsContainer  />', () => {

    it('can render the ProductsContainer container ', () => {
        let store = makeStore();
        let jsx = <Provider store={ store }>
                      <ProductsContainer />
                  </Provider>

        expect(mount(jsx).find(ProductsList).length).to.equal(1);
        expect(mount(jsx).find('button').length).to.equal(1);
    });

});
