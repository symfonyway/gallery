"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const GalleryTab = _ref => {
  let {
    images,
    currentImage,
    setGlobalCurrentImage
  } = _ref;
  return /*#__PURE__*/React.createElement("ul", {
    className: "gallery__galleryTab"
  }, images.map((img, index) => /*#__PURE__*/React.createElement("li", {
    key: img + index,
    className: currentImage === img ? '-activeLi' : '',
    onClick: () => setGlobalCurrentImage(img)
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: ""
  }))));
};

var _default = GalleryTab;
exports.default = _default;