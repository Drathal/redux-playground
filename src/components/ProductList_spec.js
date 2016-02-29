import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import ProductsList from './ProductsList'


describe('component <ProductList />', () => {

    it('can render a ProductList component', () => {

        const wrapper = mount(<ProductsList title='TestTitle' />);
        expect(wrapper.html()).to.equal('<div><h3>TestTitle</h3><div></div></div>')

    });

    it('can render a ProductList component with children', () => {

        const wrapper = mount(<ProductsList title='TestTitle' children='childs' />);
        expect(wrapper.html()).to.equal('<div><h3>TestTitle</h3><div>childs</div></div>')

    });

});
