import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import proxyquire from 'proxyquire'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../test/i18n'

import makeStore from '../../app/store'
import ProductListContainer from '../ProductListContainer'
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

    it('can has a addRandomProduct action', () => {

        const Stub = sinon.spy()
        var ProductListContainerMock = proxyquire('../ProductListContainer', {
            '../../redux/modules/products/actions': {
                addProduct: Stub
            }
        })

        ProductListContainerMock.addRandomProduct()
        const StubArgs = Stub.args[0][0]
        expect(Stub.calledOnce).to.equal(true)
        expect(StubArgs.description).to.equal(`product ${StubArgs.id}`)

    });

})
