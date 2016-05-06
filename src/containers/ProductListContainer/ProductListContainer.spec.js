import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../test/i18n'

import makeStore from '../../app/store'
import ProductListContainer, { createRandomProduct } from '../ProductListContainer'
import ProductsList from '../../components/ProductList'

describe('component container <ProductListContainer  />', () => {

    it('can render ProductListContainer', () => {
        let store = makeStore()
        const jsx = <I18nextProvider i18n={ i18n({}) }>
                        <Provider store={ store }>
                            <ProductListContainer />
                        </Provider>
                    </I18nextProvider>

        expect(mount(jsx).find(ProductsList).length).to.equal(1)
    })

    it('has a createRandomProduct method', () => {
        const randomProduct = createRandomProduct()
        expect(randomProduct.description).to.equal(`product ${randomProduct.id}`)
    });

})
