import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ProductsList from '../../components/ProductList'
import { addProduct, deleteProduct } from '../../redux/modules/products/actions'

@connect(state => {
    return { products: state.products }
}, { addProduct, deleteProduct })
class ProductListContainer extends Component {

    _doAddProduct = function() {
        const id = Math.floor(Math.random() * (100 - 5) + 5);
        this.props.addProduct({ 'id': id, 'description': `product ${id}` })
    }

    _doDeleteProduct = function(product) {
        this.props.deleteProduct(product.id)
    }

    render() {
        return <ProductsList products={ this.props.products } addProduct={ this._doAddProduct.bind(this) } deleteProduct={ this._doDeleteProduct.bind(this) } />
    }
}

ProductListContainer.propTypes = {
    products: PropTypes.array,
    addProduct: PropTypes.func,
    deleteProduct: PropTypes.func
}

export default ProductListContainer
