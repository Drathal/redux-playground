import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import LayoutMain from '../LayoutMain'
import messages from './en.json'

describe('component layout <LayoutMain />', () => {

    it('can render LayoutMain', () => {
        const wrapper = shallow(<LayoutMain children='childs' />);
        expect(wrapper.html().includes(messages.title)).to.equal(true)
        expect(wrapper.html().includes('childs')).to.equal(true)
    });

});
