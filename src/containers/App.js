import React, { Component, PropTypes } from 'react'
import ProductsContainer from './ProductsContainer'

import { addProduct } from '../redux/modules/products/actions'
import { connect } from 'react-redux'

export default class App extends Component {

    componentWillMount() {
        this.props.addProduct({'id': 1, 'description': 'product 1'});
        this.props.addProduct({'id': 2, 'description': 'product 2'});
        this.props.addProduct({'id': 3, 'description': 'product 3'});
    }

    render() {
        return (
            <div className='app'>
                <h1>My Redux Playground</h1>
                <ProductsContainer />
            </div>
        )
    }
}

App.propTypes = {addProduct: PropTypes.func.isRequired}

function mapStateToProps(state) {
    return {products: state.products.itemList}
}

export default connect(mapStateToProps, {addProduct})(App);
