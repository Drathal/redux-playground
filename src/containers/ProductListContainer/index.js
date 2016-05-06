import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ProductsList from '../../components/ProductList'
import { addProduct, deleteProduct } from '../../redux/modules/products/actions'

export const addRandomProduct = () => {
    const id = Math.floor(Math.random() * (100 - 5) + 5);
    addProduct({ 'id': id, 'description': `product ${id}` })
}

@connect(state => {
    return { products: state.products }
})
class ProductListContainer extends Component {
    render() {
        return <ProductsList products={ this.props.products } addProduct={ addRandomProduct.bind(this) } deleteProduct={ deleteProduct.bind(this) } />
    }
}

ProductListContainer.propTypes = {
    products: PropTypes.array
}

export default ProductListContainer
