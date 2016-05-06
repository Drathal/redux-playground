import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../test/i18n'

import ProductsList from '../ProductList'
import messages from './i18n/en.json'

describe('component view <ProductList />', () => {

    const products = [{ id: 777, description: 'product description' }]
    const onAddProduct = sinon.spy()
    const onDeleteProduct = sinon.spy()

    const ProductListRender = mount(<I18nextProvider i18n={ i18n(messages) }>
                                        <ProductsList products={ products } addProduct={ onAddProduct } deleteProduct={ onDeleteProduct } />
                                    </I18nextProvider>);

    const ProductListEmptyRender = mount(<I18nextProvider i18n={ i18n(messages) }>
                                             <ProductsList products={ [] } addProduct={ onAddProduct } deleteProduct={ onDeleteProduct } />
                                         </I18nextProvider>);

    it('can render messages without a product', () => {
        expect(ProductListEmptyRender.html().includes(messages.title)).to.equal(true)
        expect(ProductListEmptyRender.html().includes(messages.noProducts)).to.equal(true)
    });

    it('can render messages with a product', () => {
        expect(ProductListRender.html().includes(messages.title)).to.equal(true)
        expect(ProductListRender.html().includes(messages.addProductButton)).to.equal(true)
        expect(ProductListRender.html().includes(messages.deleteProductButton)).to.equal(true)
    });

    it('can render product informations', () => {
        expect(ProductListRender.html().includes(products[0].description)).to.equal(true)
        expect(ProductListRender.html().includes(products[0].id)).to.equal(true)
    });

    it('can handle addProduct', () => {
        ProductListRender.find('.addProduct').simulate('click')
        expect(onAddProduct.calledOnce).to.equal(true)
    });

    it('can handle deleteProduct', () => {
        ProductListRender.find('.deleteProduct-777').simulate('click')
        expect(onDeleteProduct.calledOnce).to.equal(true)
    });

});
