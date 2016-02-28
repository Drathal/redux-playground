import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Products extends Component {
    render() {

        const {products} = this.props;

        return (
            <div>
                { products.map((product) => <p key={ product.id }>
                                                { product.id }&nbsp;-&nbsp;
                                                { product.description }
                                            </p>) }
            </div>
        )
    }
}

Products.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired
    })).isRequired
}

function mapStateToProps(state) {
    return {products: state.products.itemList}
}

export default connect(mapStateToProps)(Products)
