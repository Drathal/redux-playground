import React, { PropTypes } from 'react'

const ProductList = (props) => {
    return (
        <div>
            <h3>{ props.title }</h3>
            <div className='products'>
                { (props.products || []).map((product) => <p className='product' key={ product.id }>
                                                              { product.id }
                                                              <span>-</span>
                                                              { product.description }
                                                              <button className='deleteProduct' onClick={ props.deleteProduct.bind(this, product) }>
                                                                  x
                                                              </button>
                                                          </p>) }
                <button className='addProduct' onClick={ props.addProduct.bind(this) }>
                    ADD RANDOM PRODUCT
                </button>
            </div>
        </div>
    )
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired
    })).isRequired,
    addProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired
}

export default ProductList
