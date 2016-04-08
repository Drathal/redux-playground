import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import ProductsList from '../ProductList'
import messages from './en.js'

describe('component view <ProductList />', () => {

    const products = [{id: 777, description: 'product description'}]
    const onAddProduct = sinon.spy()
    const onDeleteProduct = sinon.spy()

    const wrapper = shallow(<ProductsList products={ products }
                                          addProduct={ onAddProduct }
                                          deleteProduct={ onDeleteProduct } />);

    it('can render messages', () => {
        expect(wrapper.html().includes(messages.title)).to.equal(true)
        expect(wrapper.html().includes(messages.addProductButton)).to.equal(true)
        expect(wrapper.html().includes(messages.deleteProductButton)).to.equal(true)
    });

    it('can render product informations', () => {
        expect(wrapper.html().includes(products[0].description)).to.equal(true)
        expect(wrapper.html().includes(products[0].id)).to.equal(true)
    });

    it('can handle addProduct', () => {
        wrapper.find('button.addProduct').simulate('click')
        expect(onAddProduct.calledOnce).to.equal(true)
    });

    it('can handle deleteProduct', () => {
        wrapper.find('button.deleteProduct').simulate('click')
        expect(onDeleteProduct.calledOnce).to.equal(true)
    });

});
