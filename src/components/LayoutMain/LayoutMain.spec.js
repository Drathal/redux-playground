import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../test/i18n'

import LayoutMain from '../LayoutMain'
import messages from './en.json'

describe('component layout <LayoutMain />', () => {

    it('can render LayoutMain', () => {
        const wrapper = mount(<I18nextProvider i18n={ i18n(messages) }>
                                  <LayoutMain children='childs' />
                              </I18nextProvider>);
        expect(wrapper.html().includes(messages.title)).to.equal(true)
        expect(wrapper.html().includes('childs')).to.equal(true)
    });

});
