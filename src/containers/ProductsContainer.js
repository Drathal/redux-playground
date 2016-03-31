import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ProductsList from '../components/ProductsList'
import { addProduct, deleteProduct } from '../redux/modules/products/actions'

const doDeleteProduct = function(product) {
    this.props.deleteProduct(product.id)
}

const doAddProduct = function() {
    let id = Math.floor(Math.random() * (100 - 5) + 5);
    this.props.addProduct({'id': id, 'description': 'product ' + id})
}

class ProductsContainer extends Component {
    render() {

        const {products} = this.props;

        return (
            <ProductsList title="My Products">
                { products.map((product) => <p key={ product.id }>
                                                { product.id }
                                                <span>-</span>
                                                { product.description }
                                                <button onClick={ doDeleteProduct.bind(this, product) }>
                                                    x
                                                </button>
                                            </p>) }
                <button onClick={ doAddProduct.bind(this) }>
                    ADD RANDOM PRODUCT
                </button>
            </ProductsList>
        )
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired
    })).isRequired,
    addProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {products: state.products.itemList}
}

export default connect(mapStateToProps, {addProduct, deleteProduct})(ProductsContainer)
