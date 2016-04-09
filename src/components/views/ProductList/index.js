import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules';

import styles from './style.css';
import messages from './en.json'

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import RaisedButton from 'material-ui/lib/raised-button';

const ProductList = (props) => {
    return (
        <div>
            <h3>{ props.messages.title }</h3>
            <RaisedButton className='addProduct'
                          styleName='addProductButton'
                          label={ props.messages.addProductButton }
                          primary={ true }
                          onTouchTap={ props.addProduct.bind(this) } />
            <div className='products'>
                { (props.products || []).map((product) => <Card className={ 'product' + ' product-' + product.id }
                                                                styleName='card'
                                                                key={ product.id }>
                                                              <CardTitle title={ product.description }
                                                                         subtitle={ product.id } />
                                                              <CardMedia overlay={ <CardTitle subtitle="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum " /> }>
                                                                  <img src={ '//placehold.it/600x165' } />
                                                              </CardMedia>
                                                              <CardActions>
                                                                  <RaisedButton label={ props.messages.deleteProductButton }
                                                                                secondary={ true }
                                                                                styleName='deleteButton'
                                                                                className={ 'deleteProduct' + ' deleteProduct-' + product.id }
                                                                                onTouchTap={ props.deleteProduct.bind(this, product) } />
                                                                  <RaisedButton label={ props.messages.addToCartButton }
                                                                                styleName='addButton'
                                                                                primary={ true } />
                                                              </CardActions>
                                                          </Card>) }
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

export default CSSModules(ProductList, styles, {errorWhenNotFound: false})
