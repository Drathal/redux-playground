import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules';
import RaisedButton from 'material-ui/lib/raised-button';
import styles from './style.css';
import messages from './en.json'

const ProductList = (props) => {
    return (
        <div>
            <h3>{ props.messages.title }</h3>
            <div className='products'>
                { (props.products || []).map((product) => <div className={ 'product' + ' product-' + product.id }
                                                               key={ product.id }>
                                                              { product.id }
                                                              <span>-</span>
                                                              { product.description }
                                                              <RaisedButton className={ 'deleteProduct' + ' deleteProduct-' + product.id }
                                                                            secondary={ true }
                                                                            label={ props.messages.deleteProductButton }
                                                                            onClick={ props.deleteProduct.bind(this, product) }
                                                                            onTouchTap={ props.deleteProduct.bind(this, product) } />
                                                          </div>) }
                <RaisedButton className='addProduct'
                              label={ props.messages.addProductButton }
                              primary={ true }
                              onClick={ props.addProduct.bind(this) }
                              onTouchTap={ props.addProduct.bind(this) } />
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

export default CSSModules(ProductList, styles, {errorWhenNotFound: false})
