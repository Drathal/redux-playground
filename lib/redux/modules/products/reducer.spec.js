'use strict';

var _chai = require('chai');

var _deepFreeze = require('deep-freeze');

var _deepFreeze2 = _interopRequireDefault(_deepFreeze);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('reducer products', function () {

    var product1 = { 'id': 1, 'description': 'product 1' };
    var product2 = { 'id': 2, 'description': 'product 2' };
    var product3 = { 'id': 3, 'description': 'product 3' };

    it('can add products', function () {

        var stateBefore = { items: {}, itemList: [], quantity: 0 };
        var action1 = (0, _actions.addProduct)(product1);
        var action2 = (0, _actions.addProduct)(product2);
        var stateAfter1 = { items: { 1: product1 }, itemList: [product1], quantity: 1 };
        var stateAfter2 = { items: { 1: product1, 2: product2 }, itemList: [product1, product2], quantity: 2 };

        (0, _deepFreeze2.default)(stateBefore);
        (0, _deepFreeze2.default)(action1);
        (0, _deepFreeze2.default)(action2);

        (0, _chai.expect)((0, _index2.default)(stateBefore, action1)).to.deep.equal(stateAfter1);
        (0, _chai.expect)((0, _index2.default)(stateAfter1, action2)).to.deep.equal(stateAfter2);
    });

    it('can not add an existing product', function () {

        var stateBefore = { items: {}, itemList: [], quantity: 0 };
        var action1 = (0, _actions.addProduct)(product1);
        var action2 = (0, _actions.addProduct)(product2);
        var action3 = (0, _actions.addProduct)(product2);
        var stateAfter1 = { items: { 1: product1 }, itemList: [product1], quantity: 1 };
        var stateAfter2 = { items: { 1: product1, 2: product2 }, itemList: [product1, product2], quantity: 2 };
        var stateAfter3 = { items: { 1: product1, 2: product2 }, itemList: [product1, product2], quantity: 2 };

        (0, _deepFreeze2.default)(stateBefore);
        (0, _deepFreeze2.default)(action1);
        (0, _deepFreeze2.default)(action2);
        (0, _deepFreeze2.default)(action3);

        (0, _chai.expect)((0, _index2.default)(stateBefore, action1)).to.deep.equal(stateAfter1);
        (0, _chai.expect)((0, _index2.default)(stateAfter1, action2)).to.deep.equal(stateAfter2);
        (0, _chai.expect)((0, _index2.default)(stateAfter2, action3)).to.deep.equal(stateAfter3);
    });

    it('can delete a product', function () {

        var stateBefore = { items: { 1: product1 }, itemList: [product1], quantity: 1 };
        var action = (0, _actions.deleteProduct)(1);
        var stateAfter = { items: {}, itemList: [], quantity: 0 };

        (0, _deepFreeze2.default)(stateBefore);
        (0, _deepFreeze2.default)(action);

        (0, _chai.expect)((0, _index2.default)(stateBefore, action)).to.deep.equal(stateAfter);
    });

    it('can delete a product from many', function () {

        var stateBefore = { items: { 1: product1, 2: product2, 3: product3 }, itemList: [product1, product2, product3], quantity: 3 };
        var action = (0, _actions.deleteProduct)(3);
        var stateAfter = { items: { 1: product1, 2: product2 }, itemList: [product1, product2], quantity: 2 };

        (0, _deepFreeze2.default)(stateBefore);
        (0, _deepFreeze2.default)(action);

        (0, _chai.expect)((0, _index2.default)(stateBefore, action)).to.deep.equal(stateAfter);
    });
});