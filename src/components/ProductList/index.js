import React, { PropTypes } from 'react'
import { Button } from 'react-toolbox';
import { translate } from 'react-i18next';

const ProductList = (props) => {

    const {t} = props;

    const products = product => <div className={ 'product' + ' product-' + product.id }
                                     key={ product.id }>
                                    <h1>{ product.description } { product.id }</h1>
                                    <img src={ '//placehold.it/600x165' } />
                                    <div>
                                        <Button raised
                                                label={ t('deleteProduct') }
                                                className={ 'deleteProduct' + ' deleteProduct-' + product.id }
                                                onTouchTap={ props.deleteProduct.bind(this, product) } />
                                        <Button raised
                                                label={ t('addToCart') }
                                                className={ 'addToCart' + ' addToCart-' + product.id } />
                                    </div>
                                </div>

    const noProducts = <h4>{ t('noProducts') }</h4>

    return (
        <div>
            <h3>{ t('title') }</h3>
            <Button raised
                    primary
                    className={ 'addProduct' }
                    label={ t('addProduct') }
                    onTouchTap={ props.addProduct.bind(this) } />
            <div className='products'>
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

export default translate(['common', 'ProductList'])(ProductList);
