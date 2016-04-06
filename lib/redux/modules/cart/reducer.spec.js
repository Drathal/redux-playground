'use strict';

var _chai = require('chai');

var _deepFreeze = require('deep-freeze');

var _deepFreeze2 = _interopRequireDefault(_deepFreeze);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('reducer cart', function () {

    it('can add an item', function () {

        var stateBefore = { items: [], quantityById: {} };
        var action = actions.addItem(1);
        var stateAfter = { items: [1], quantityById: { 1: 1 } };

        (0, _deepFreeze2.default)(stateBefore);
        (0, _deepFreeze2.default)(action);

        (0, _chai.expect)(stateAfter).to.deep.equal((0, _index2.default)(stateBefore, action));
    });

    it('can add an existing item', function () {

        var stateBefore = { items: [1], quantityById: { 1: 1 } };
        var action = actions.addItem(1);
        var stateAfter = { items: [1], quantityById: { 1: 2 } };

        (0, _deepFreeze2.default)(stateBefore);
        (0, _deepFreeze2.default)(action);

        (0, _chai.expect)(stateAfter).to.deep.equal((0, _index2.default)(stateBefore, action));
    });

    it('can delete an item', function () {

        var stateBefore = { items: [1, 2], quantityById: { 1: 2, 2: 1 } };
        var action = actions.deleteItem(1);
        var stateAfter = { items: [2], quantityById: { 2: 1 } };

        (0, _deepFreeze2.default)(stateBefore);
        (0, _deepFreeze2.default)(action);

        (0, _chai.expect)(stateAfter).to.deep.equal((0, _index2.default)(stateBefore, action));
    });

    it('can not delete a non existing item', function () {

        var stateBefore = { items: [1], quantityById: { 1: 1 } };
        var action = actions.deleteItem(2);
        var stateAfter = { items: [1], quantityById: { 1: 1 } };

        (0, _deepFreeze2.default)(stateBefore);
        (0, _deepFreeze2.default)(action);

        (0, _chai.expect)(stateAfter).to.deep.equal((0, _index2.default)(stateBefore, action));
    });

    it('can increment item quantity', function () {

        var stateBefore = { items: [1], quantityById: { 1: 1 } };
        var action = actions.incrementQuantity(1);
        var stateAfter = { items: [1], quantityById: { 1: 2 } };

        (0, _deepFreeze2.default)(stateBefore);
        (0, _deepFreeze2.default)(action);

        (0, _chai.expect)(stateAfter).to.deep.equal((0, _index2.default)(stateBefore, action));
    });

    it('can decrement item quantity', function () {

        var stateBefore = { items: [1], quantityById: { 1: 2 } };
        var action = actions.decrementQuantity(1);
        var stateAfter = { items: [1], quantityById: { 1: 1 } };

        (0, _deepFreeze2.default)(stateBefore);
        (0, _deepFreeze2.default)(action);

        (0, _chai.expect)(stateAfter).to.deep.equal((0, _index2.default)(stateBefore, action));
    });

    it('can remove an item when there is only one in cart', function () {

        var stateBefore = { items: [1], quantityById: { 1: 1 } };
        var action = actions.decrementQuantity(1);
        var stateAfter = { items: [], quantityById: {} };

        (0, _deepFreeze2.default)(stateBefore);
        (0, _deepFreeze2.default)(action);

        (0, _chai.expect)(stateAfter).to.deep.equal((0, _index2.default)(stateBefore, action));
    });
});