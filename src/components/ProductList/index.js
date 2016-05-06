import React, { PropTypes } from 'react'
import { translate } from 'react-i18next';
import { Button, Panel } from 'react-bootstrap'
import productPicture from './product.jpg'
import style from './style'

const ProductList = (props) => {

    const { t } = props

    const products = product => <Panel header={ product.description }
                                    bsStyle="primary"
                                    className={ `product-${product.id} ${style.productCard}` }
                                    key={ product.id }>
                                    <img className={ `product-image-${product.id} ${style.productImage}` } src={ productPicture.length > 0 && productPicture || '' } />
                                    <Button className={ `deleteProduct deleteProduct-${product.id} ${style.deleteProductButton}` } onClick={ props.deleteProduct.bind(this, product.id) }>
                                        { t('deleteProductButton') }
                                    </Button>
                                    <Button className={ `addToCart addToCart-${product.id}` }>
                                        { t('addToCartButton') }
                                    </Button>
                                </Panel>

    const noProducts = <h4>{ t('noProducts') }</h4>

    return (
        <div className={ `productsWrapper ${style.productsWrapper}` }>
            <h2>{ t('title') }</h2>
            <Button className={ `addProduct ${style.addProductButton}` } onClick={ props.addProduct.bind(this) }>
                { t('addProductButton') }
            </Button>
            <div className={ style.products }>
                { props.products.length > 0 && props.products.map(products) }
                { props.products.length === 0 && noProducts }
            </div>
        </div>
    ) }

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired
    })).isRequired,
    t: PropTypes.func,
    addProduct: PropTypes.func,
    deleteProduct: PropTypes.func
}

ProductList.defaultProps = {
    products: [],
    t: () => {},
    addProduct: () => {},
    deleteProduct: () => {}
};

export default translate(['ProductList', 'common'])(ProductList)
