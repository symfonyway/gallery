"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

var _NavigationBar = _interopRequireDefault(require("../organisms/NavigationBar"));

var _ExpandGalleryBtn = _interopRequireDefault(require("../organisms/ExpandGalleryBtn"));

var _GalleryTab = _interopRequireDefault(require("../organisms/GalleryTab"));

var _cross_lightgray = _interopRequireDefault(require("../icons/cross_lightgray.svg"));

require("../styles/gallery.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Gallery(_ref) {
  let {
    images,
    closeGallery
  } = _ref;
  const [currentImage, setGlobalCurrentImage] = (0, _react.useState)(images ? images[0] : null);
  const [isOpenTab, setIsOpenTab] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    setGlobalCurrentImage(images ? images[0] : null);
  }, [images]);
  return /*#__PURE__*/React.createElement(_react.Fragment, null, images !== null && /*#__PURE__*/React.createElement("div", {
    className: "gallery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gallery__mainWindow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gallery__mainPicture",
    style: {
      backgroundImage: "url(".concat(currentImage, ")")
    }
  }), isOpenTab && /*#__PURE__*/React.createElement(_GalleryTab.default, {
    currentImage: currentImage,
    setGlobalCurrentImage: setGlobalCurrentImage,
    images: images
  })), /*#__PURE__*/React.createElement(_NavigationBar.default, {
    currImg: currentImage,
    setGlobalCurrentImage: setGlobalCurrentImage,
    images: images
  }), /*#__PURE__*/React.createElement(_ExpandGalleryBtn.default, {
    isOpen: isOpenTab,
    switchAction: setIsOpenTab
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => closeGallery(),
    type: "button",
    className: "gallery__expandGalleryBtn gallery__expandGalleryBtn_close"
  }, /*#__PURE__*/React.createElement("img", {
    src: _cross_lightgray.default,
    alt: "close gallery button"
  }))));
}

var _default = Gallery;
exports.default = _default;