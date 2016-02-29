import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import ProductsList from './ProductsList'

describe('component', () => {

    it('can render a ProductList component', () => {

        const wrapper = mount(<ProductsList title='TestTitle' />);
        expect(wrapper.html()).to.equal('<div><h3>TestTitle</h3><div></div></div>')

    });

});
