import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import ProductsList from '../ProductList'

describe('component view <ProductList />', () => {

    const products = [{id: 1, description: 'desc'}]
    const onAddProduct = sinon.spy()
    const onDeleteProduct = sinon.spy()

    it('can render ProductList', () => {
        const wrapper = shallow(<ProductsList products={ products }
                                              addProduct={ onAddProduct }
                                              deleteProduct={ onDeleteProduct } />);
        expect(wrapper.html()).to.equal('<div><h3>PRODUCTLIST_TITLE</h3><div class="products"><p class="product">1<span>-</span>desc<button class="deleteProduct">PRODUCTLIST_DELETE_PRODUCT_BUTTON</button></p><button class="addProduct">PRODUCTLIST_ADD_PRODUCT_BUTTON</button></div></div>')

        wrapper.find('button.addProduct').simulate('click')
        expect(onAddProduct.calledOnce).to.equal(true)

        wrapper.find('button.deleteProduct').simulate('click')
        expect(onDeleteProduct.calledOnce).to.equal(true)
    });

});
