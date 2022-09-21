"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GalleryTab = _ref => {
  let {
    images,
    currentImage,
    setGlobalCurrentImage
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: "gallery__galleryTab"
  }, images.map((img, index) => /*#__PURE__*/_react.default.createElement("li", {
    key: img + index,
    className: currentImage === img ? '-activeLi' : '',
    onClick: () => setGlobalCurrentImage(img)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: img,
    alt: ""
  }))));
};

var _default = GalleryTab;
exports.default = _default;