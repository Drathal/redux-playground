'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _ProductList = require('../ProductList');

var _ProductList2 = _interopRequireDefault(_ProductList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('component view <ProductList />', function () {

    var products = [{ id: 1, description: 'desc' }];
    var onAddProduct = _sinon2.default.spy();
    var onDeleteProduct = _sinon2.default.spy();

    it('can render ProductList', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ProductList2.default, { products: products,
            addProduct: onAddProduct,
            deleteProduct: onDeleteProduct }));
        (0, _chai.expect)(wrapper.html()).to.equal('<div><h3>PRODUCTLIST_TITLE</h3><div class="products"><p class="product">1<span>-</span>desc<button class="deleteProduct">PRODUCTLIST_DELETE_PRODUCT_BUTTON</button></p><button class="addProduct">PRODUCTLIST_ADD_PRODUCT_BUTTON</button></div></div>');

        wrapper.find('button.addProduct').simulate('click');
        (0, _chai.expect)(onAddProduct.calledOnce).to.equal(true);

        wrapper.find('button.deleteProduct').simulate('click');
        (0, _chai.expect)(onDeleteProduct.calledOnce).to.equal(true);
    });
});