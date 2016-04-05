import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProductsList from '../views/ProductList'
import { addProduct, deleteProduct } from '../../redux/modules/products/actions'

class ProductListContainer extends Component {

    _doAddProduct = function() {
        let id = Math.floor(Math.random() * (100 - 5) + 5);
        this.props.addProduct({'id': id, 'description': 'product ' + id})
    }

    _doDeleteProduct = function(product) {
        this.props.deleteProduct(product.id)
    }

    render() {
        return (<ProductsList title="My Products" products={ this.props.products } addProduct={ this._doAddProduct.bind(this) } deleteProduct={ this._doDeleteProduct.bind(this) }></ProductsList>)
    }
}

function mapStateToProps(state) {
    return {products: state.products.itemList}
}

export default connect(mapStateToProps, {addProduct, deleteProduct})(ProductListContainer)
