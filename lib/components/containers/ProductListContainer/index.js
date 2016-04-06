'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _ProductList = require('../../views/ProductList');

var _ProductList2 = _interopRequireDefault(_ProductList);

var _actions = require('../../../redux/modules/products/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductListContainer = (_dec = (0, _reactRedux.connect)(function (state) {
    return { products: state.products.itemList };
}, { addProduct: _actions.addProduct, deleteProduct: _actions.deleteProduct }), _dec(_class = function (_Component) {
    _inherits(ProductListContainer, _Component);

    function ProductListContainer() {
        var _Object$getPrototypeO;

        var _temp, _this, _ret;

        _classCallCheck(this, ProductListContainer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ProductListContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this._doAddProduct = function () {
            var id = Math.floor(Math.random() * (100 - 5) + 5);
            this.props.addProduct({ 'id': id, 'description': 'product ' + id });
        }, _this._doDeleteProduct = function (product) {
            this.props.deleteProduct(product.id);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ProductListContainer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_ProductList2.default, { title: 'My Products',
                products: this.props.products,
                addProduct: this._doAddProduct.bind(this),
                deleteProduct: this._doDeleteProduct.bind(this) });
        }
    }]);

    return ProductListContainer;
}(_react.Component)) || _class);
exports.default = ProductListContainer;