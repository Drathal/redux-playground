import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../app/i18n/i18n'
import routes from '../../app/routes'

const Root = ({ store, history }) => {
    return <I18nextProvider i18n={ i18n }>
               <Provider store={ store }>
                   <Router children={ routes } history={ history } />
               </Provider>
           </I18nextProvider>
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

export default Root
