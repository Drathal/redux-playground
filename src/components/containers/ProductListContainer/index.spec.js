import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { Provider } from 'react-redux'

import makeStore from '../../../app/store'
import ProductListContainer from '../../containers/ProductListContainer'
import ProductsList from '../../views/ProductList'

describe('component container <ProductListContainer  />', () => {

    it('can render ProductListContainer ', () => {
        let store = makeStore();
        let jsx = <Provider store={ store }>
                      <ProductListContainer />
                  </Provider>

        expect(mount(jsx).find(ProductsList).length).to.equal(1);
    });

});
