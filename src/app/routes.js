import React from 'react';
import { Router, Route, browserHistory, IndexRoute, match } from 'react-router';
import { I18nextProvider, loadNamespaces } from 'react-i18next';

import LayoutMain from '../components/LayoutMain'
import NotFound from '../components/NotFound'

import App from '../containers/App'
import ProductListContainer from '../containers/ProductListContainer'

export default (
<Router history={ browserHistory }>
    <Route path="/"
           component={ LayoutMain }>
        <IndexRoute component={ ProductListContainer } />
        <Route path="products"
               component={ ProductListContainer } />
        <Route path="*"
               component={ NotFound } />
    </Route>
</Router>
);
