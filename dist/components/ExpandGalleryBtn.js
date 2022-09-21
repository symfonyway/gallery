"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _cross_lightgray = _interopRequireDefault(require("../icons/cross_lightgray.svg"));

var _points = _interopRequireDefault(require("../icons/points.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ExpandGalleryBtn = _ref => {
  let {
    isOpen,
    switchAction
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => switchAction(!isOpen),
    type: "button",
    className: "gallery__expandGalleryBtn"
  }, !isOpen && /*#__PURE__*/_react.default.createElement("img", {
    src: _points.default,
    alt: ""
  }), isOpen && /*#__PURE__*/_react.default.createElement("img", {
    src: _cross_lightgray.default,
    alt: ""
  }));
};

var _default = ExpandGalleryBtn;
exports.default = _default;