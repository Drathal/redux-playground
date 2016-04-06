'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _en = require('./en');

var _en2 = _interopRequireDefault(_en);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LayoutMain = function LayoutMain(props) {
    return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(
            'h1',
            null,
            props.messages.title
        ),
        _react2.default.createElement(
            'main',
            null,
            props.children
        )
    );
};

LayoutMain.defaultProps = { messages: _en2.default };
LayoutMain.propTypes = { messages: _react.PropTypes.object };

exports.default = LayoutMain;