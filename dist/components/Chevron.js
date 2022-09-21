"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _chevron = _interopRequireDefault(require("../icons/chevron.png"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Chevron(_ref) {
  let {
    direction,
    onClick
  } = _ref;
  let direct = null;

  switch (direction) {
    case 'left':
      direct = {
        transform: 'rotate(180deg)'
      };
      break;

    case 'top':
      direct = {
        transform: 'rotate(270deg)'
      };
      break;

    case 'bottom':
      direct = {
        transform: 'rotate(90deg)'
      };
      break;

    default:
      break;
  }

  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick,
    style: direct,
    type: "button",
    className: "gallery__chevron"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _chevron.default,
    alt: "gallery arrow"
  }));
}

var _default = Chevron;
exports.default = _default;