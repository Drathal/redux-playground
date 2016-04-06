'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _reactRedux = require('react-redux');

var _store = require('../../../app/store');

var _store2 = _interopRequireDefault(_store);

var _ProductListContainer = require('../../containers/ProductListContainer');

var _ProductListContainer2 = _interopRequireDefault(_ProductListContainer);

var _ProductList = require('../../views/ProductList');

var _ProductList2 = _interopRequireDefault(_ProductList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('component container <ProductListContainer  />', function () {

    it('can render ProductListContainer', function () {
        var store = (0, _store2.default)();
        var jsx = _react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(_ProductListContainer2.default, null)
        );

        (0, _chai.expect)((0, _enzyme.mount)(jsx).find(_ProductList2.default).length).to.equal(1);
    });
});