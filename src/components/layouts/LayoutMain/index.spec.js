import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import LayoutMain from '../LayoutMain'

describe('component layout <LayoutMain />', () => {

    it('can render LayoutMain', () => {
        const wrapper = shallow(<LayoutMain children='childs' />);
        expect(wrapper.html()).to.equal('<div class="app"><h1>LAYOUTMAIN_TITLE</h1><main>childs</main></div>')
    });

});
