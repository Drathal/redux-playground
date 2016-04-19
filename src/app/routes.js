import React from 'react';
import { Router, Route, browserHistory, IndexRoute, match } from 'react-router';

import LayoutMain from '../components/LayoutMain'
import NotFound from '../components/NotFound'

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
// <DevTools />
