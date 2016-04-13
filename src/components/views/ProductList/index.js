import React, { PropTypes } from 'react'
import { Button } from 'react-toolbox';
import messages from './en.json'

const ProductList = (props) => {
    return (
        <div>
            <h3>{ props.messages.title }</h3>
            <Button raised
                    primary
                    className={ 'addProduct' }
                    label={ props.messages.addProductButton }
                    onTouchTap={ props.addProduct.bind(this) } />
            <div className='products'>
                { (props.products || []).map((product) => <div className={ 'product' + ' product-' + product.id }
                                                               key={ product.id }>
                                                              <h1 title={ product.description }
                                                                  subtitle={ product.id } />
                                                              <div overlay={ <p subtitle="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum " /> }>
                                                                  <img src={ '//placehold.it/600x165' } />
                                                              </div>
                                                              <div>
                                                                  <Button raised
                                                                          label={ props.messages.deleteProductButton }
                                                                          className={ 'deleteProduct' + ' deleteProduct-' + product.id }
                                                                          onTouchTap={ props.deleteProduct.bind(this, product) } />
                                                                  <Button raised
                                                                          label={ props.messages.addToCartButton }
                                                                          className={ 'addToCart' + ' addToCart-' + product.id } />
                                                              </div>
                                                          </div>) }
                { props.products.length === 0 && <h3>{ props.messages.noProducts }</h3> }
            </div>
        </div>
    )
}

ProductList.defaultProps = {messages};

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
