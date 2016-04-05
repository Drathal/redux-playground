import React, { PropTypes } from 'react'

const ProductList = (props) => {
    return (
        <div>
            <h3>{ props.messages.title }</h3>
            <div className='products'>
                { (props.products || []).map((product) => <p className='product' key={ product.id }>
                                                              { product.id }
                                                              <span>-</span>
                                                              { product.description }
                                                              <button className='deleteProduct' onClick={ props.deleteProduct.bind(this, product) }>
                                                                  { props.messages.deleteProductButton }
                                                              </button>
                                                          </p>) }
                <button className='addProduct' onClick={ props.addProduct.bind(this) }>
                    { props.messages.addProductButton }
                </button>
            </div>
        </div>
    )
}

ProductList.defaultProps = {
    messages: {
        title: 'PRODUCTLIST_TITLE',
        addProductButton: 'PRODUCTLIST_ADD_PRODUCT_BUTTON',
        deleteProductButton: 'PRODUCTLIST_DELETE_PRODUCT_BUTTON'
    }
};

ProductList.propTypes = {
    messages: PropTypes.object,
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired
    })).isRequired,
    addProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired
}

export default ProductList
