import React, { Component, PropTypes } from 'react'
import { connect, dispatch } from 'react-redux'

import ProductsList from '../../components/ProductList'
import { addProduct, deleteProduct } from '../../redux/modules/products/actions'

export const addRandomProduct = () => {
    console.log('******************')
    const id = Math.floor(Math.random() * (100 - 5) + 5);
    addProduct({ 'id': id, 'description': `product ${id}` })
}

export default connect(
    function mapStateToProps(state) {
        return { products: state.products }
    },
    function mapDispatchToProps(dispatch) {
        return {
            deleteProduct: dispatch(deleteProduct())
        };
    }
)(ProductsList)

/*
@connect(
    state => {
        return {
            products: state.products
        }
    },
    {
        deleteProduct,
        addProduct: addRandomProduct
    }
)
class ProductListContainer extends Component {
    render() {
        console.log('this.props.addRandomProduct', this.props.addProduct)
        return <ProductsList products={ this.props.products } addProduct={ this.props.addProduct } deleteProduct={ this.props.deleteProduct } />
    }
}

ProductListContainer.propTypes = {
    products: PropTypes.array,
    addProduct: PropTypes.func,
    deleteProduct: PropTypes.func
}

export default ProductListContainer
*/
