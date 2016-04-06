'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _LayoutMain = require('../LayoutMain');

var _LayoutMain2 = _interopRequireDefault(_LayoutMain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('component layout <LayoutMain />', function () {

    it('can render LayoutMain', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_LayoutMain2.default, { children: 'childs' }));
        (0, _chai.expect)(wrapper.html()).to.equal('<div class="app"><h1>LAYOUTMAIN_TITLE</h1><main>childs</main></div>');
    });
});