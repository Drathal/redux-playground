import React, { Component } from 'react'
import { connect } from 'react-redux'
import config from '../../../config/default'

import { getProducts } from '../../api/product'
import ProductsList from '../../components/ProductList'
import { addProduct, deleteProduct } from '../../redux/modules/products/actions'

@connect((state) => {
    return {products: state.products}
}, {addProduct, deleteProduct})
export default class ProductListContainer extends Component {

    _doAddProduct = function() {
        let id = Math.floor(Math.random() * (100 - 5) + 5);
        this.props.addProduct({'id': id, 'description': 'product ' + id})
    }

    _doDeleteProduct = function(product) {
        this.props.deleteProduct(product.id)
    }

    componentDidMount = function() {
        getProducts(config.endpoint.productApi).then(response => {
            response.data.map(product => {
                this.props.addProduct(product)
            })
        })
    }

    render() {
        return (<ProductsList products={ this.props.products } addProduct={ this._doAddProduct.bind(this) } deleteProduct={ this._doDeleteProduct.bind(this) } />)
    }
}
