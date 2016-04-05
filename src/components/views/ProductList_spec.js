import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import ProductsList from './ProductsList'

describe('component view <ProductList />', () => {

    const products = [{id: 1, description: 'desc'}]
    const onAddProduct = sinon.spy()
    const onDeleteProduct = sinon.spy()

    it('can render a ProductList component', () => {
        const wrapper = shallow(<ProductsList title='TestTitle' products={ products } addProduct={ onAddProduct } deleteProduct={ onDeleteProduct } />);
        expect(wrapper.html()).to.equal('<div><h3>TestTitle</h3><div class="products"><p class="product">1<span>-</span>desc<button class="deleteProduct">x</button></p><button class="addProduct">ADD RANDOM PRODUCT</button></div></div>')

        wrapper.find('button.addProduct').simulate('click')
        expect(onAddProduct.calledOnce).to.equal(true)

        wrapper.find('button.deleteProduct').simulate('click')
        expect(onDeleteProduct.calledOnce).to.equal(true)
    });

});
