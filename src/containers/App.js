import React, { Component } from 'react'
import ProductsContainer from './ProductsContainer'

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>My Redux Playground</h1>
                <ProductsContainer />
            </div>
        )
    }
}
