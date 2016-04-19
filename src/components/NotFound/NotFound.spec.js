import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../test/i18n'

import NotFound from '../NotFound'
import messages from './i18n/en.json'

describe('component layout <NotFound />', () => {

    it('can render NotFound', () => {
        const wrapper = mount(<I18nextProvider i18n={ i18n(messages, 'NotFound') }>
                                  <NotFound/>
                              </I18nextProvider>);
        expect(wrapper.html().includes(messages.title)).to.equal(true)
        expect(wrapper.html().includes(messages.message)).to.equal(true)
    });

});
