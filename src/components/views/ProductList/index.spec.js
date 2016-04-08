import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import ProductsList from '../ProductList'
import messages from './en.json'

describe('component view <ProductList />', () => {

    const products = [{id: 777, description: 'product description'}]
    const onAddProduct = sinon.spy()
    const onDeleteProduct = sinon.spy()

    it('can render messages without a product', () => {
        const wrapper = shallow(<ProductsList products={ [] }
                                              addProduct={ onAddProduct }
                                              deleteProduct={ onDeleteProduct } />);
        expect(wrapper.html().includes(messages.title)).to.equal(true)
        expect(wrapper.html().includes(messages.noProducts)).to.equal(true)
    });

    it('can render messages with a product', () => {
        const wrapper = shallow(<ProductsList products={ products }
                                              addProduct={ onAddProduct }
                                              deleteProduct={ onDeleteProduct } />);
        expect(wrapper.html().includes(messages.title)).to.equal(true)
        expect(wrapper.html().includes(messages.addProductButton)).to.equal(true)
        expect(wrapper.html().includes(messages.deleteProductButton)).to.equal(true)
    });

    it('can render product informations', () => {
        const wrapper = shallow(<ProductsList products={ products }
                                              addProduct={ onAddProduct }
                                              deleteProduct={ onDeleteProduct } />);
        expect(wrapper.html().includes(products[0].description)).to.equal(true)
        expect(wrapper.html().includes(products[0].id)).to.equal(true)
    });

    it('can handle addProduct', () => {
        const wrapper = shallow(<ProductsList products={ products }
                                              addProduct={ onAddProduct }
                                              deleteProduct={ onDeleteProduct } />);
        wrapper.find('.addProduct').simulate('touchTap')
        expect(onAddProduct.calledOnce).to.equal(true)
    });

    it('can handle deleteProduct', () => {
        const wrapper = shallow(<ProductsList products={ products }
                                              addProduct={ onAddProduct }
                                              deleteProduct={ onDeleteProduct } />);
        wrapper.find('.deleteProduct-777').simulate('touchTap')
        expect(onDeleteProduct.calledOnce).to.equal(true)
    });

});
