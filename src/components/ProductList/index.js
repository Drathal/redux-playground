import React, { PropTypes } from 'react'
import { Button, Card, CardTitle, CardMedia, CardText, CardActions } from 'react-toolbox';
import { translate } from 'react-i18next';
import productPicture from './product.jpg'
import style from './style'

const ProductList = (props) => {

    const {t} = props;

    const products = product => <Card className={ 'product-' + product.id + ' ' + style.productCard } key={ product.id }>
                                    <CardTitle className={ style.productTitle } title={ product.description } />
                                    <CardMedia aspectRatio="wide" image={ productPicture || '' } />
                                    <CardActions>
                                        <Button raised
                                            accent
                                            label={ t('deleteProductButton') }
                                            className={ 'deleteProduct' + ' deleteProduct-' + product.id }
                                            onClick={ props.deleteProduct.bind(this, product) } />
                                        <Button raised
                                            accent
                                            label={ t('addToCartButton') }
                                            className={ 'addToCart' + ' addToCart-' + product.id } />
                                    </CardActions>
                                </Card>

    const noProducts = <h4>{ t('noProducts') }</h4>

    return (
        <div>
            <h3>{ t('title') }</h3>
            <Button raised
                primary
                className={ 'addProduct' }
                label={ t('addProductButton') }
                onClick={ props.addProduct.bind(this) } />
            <div className={ style.products }>
                { props.products.length > 0 && (props.products).map(products) }
                { props.products.length === 0 && noProducts }
            </div>
        </div>
    )
}

ProductList.propTypes = {
    messages: PropTypes.object,
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired
    })).isRequired,
    addProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired
}

export default translate(['ProductList', 'common'])(ProductList);
