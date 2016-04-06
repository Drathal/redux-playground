'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _style = require('./style.css');

var _style2 = _interopRequireDefault(_style);

var _en = require('./en');

var _en2 = _interopRequireDefault(_en);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductList = function ProductList(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            null,
            props.messages.title
        ),
        _react2.default.createElement(
            'div',
            { className: 'products' },
            (props.products || []).map(function (product) {
                return _react2.default.createElement(
                    'p',
                    { className: 'product',
                        key: product.id },
                    product.id,
                    _react2.default.createElement(
                        'span',
                        null,
                        '-'
                    ),
                    product.description,
                    _react2.default.createElement(
                        'button',
                        { className: 'deleteProduct',
                            styleName: 'button',
                            onClick: props.deleteProduct.bind(undefined, product) },
                        props.messages.deleteProductButton
                    )
                );
            }),
            _react2.default.createElement(
                'button',
                { className: 'addProduct',
                    styleName: 'button',
                    onClick: props.addProduct.bind(undefined) },
                props.messages.addProductButton
            )
        )
    );
};

ProductList.defaultProps = { messages: _en2.default };

ProductList.propTypes = {
    messages: _react.PropTypes.object,
    products: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        id: _react.PropTypes.number.isRequired,
        description: _react.PropTypes.string.isRequired
    })).isRequired,
    addProduct: _react.PropTypes.func.isRequired,
    deleteProduct: _react.PropTypes.func.isRequired
};

exports.default = (0, _reactCssModules2.default)(ProductList, _style2.default);