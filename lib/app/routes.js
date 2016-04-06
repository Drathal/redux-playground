'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _LayoutMain = require('../components/layouts/LayoutMain');

var _LayoutMain2 = _interopRequireDefault(_LayoutMain);

var _ProductListContainer = require('../components/containers/ProductListContainer');

var _ProductListContainer2 = _interopRequireDefault(_ProductListContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(
        _reactRouter.Route,
        { component: _LayoutMain2.default },
        _react2.default.createElement(_reactRouter.Route, { path: '/', component: _ProductListContainer2.default })
    )
);