import React, { Component, PropTypes } from 'react'

export default class ProductsList extends Component {
    render() {
        return (
            <div>
                <h3>{ this.props.title }</h3>
                <div className='products'>
                    { this.props.children }
                </div>
            </div>
        )
    }
}

ProductsList.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired
}
