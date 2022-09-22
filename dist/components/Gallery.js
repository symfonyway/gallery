"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _NavigationBar = _interopRequireDefault(require("./NavigationBar"));

var _ExpandGalleryBtn = _interopRequireDefault(require("./ExpandGalleryBtn"));

var _GalleryTab = _interopRequireDefault(require("./GalleryTab"));

var _cross_lightgray = _interopRequireDefault(require("../icons/cross_lightgray.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Gallery(_ref) {
  let {
    images,
    closeGallery,
    className
  } = _ref;
  const [currentImage, setGlobalCurrentImage] = (0, _react.useState)(images ? images[0] : null);
  const [isOpenTab, setIsOpenTab] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    setGlobalCurrentImage(images ? images[0] : null);
  }, [images]);
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, images !== null && /*#__PURE__*/_react.default.createElement("div", {
    className: "gallery ".concat(className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "gallery__mainWindow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "gallery__mainPicture",
    style: {
      backgroundImage: "url(".concat(currentImage, ")")
    }
  }), isOpenTab && /*#__PURE__*/_react.default.createElement(_GalleryTab.default, {
    currentImage: currentImage,
    setGlobalCurrentImage: setGlobalCurrentImage,
    images: images
  })), /*#__PURE__*/_react.default.createElement(_NavigationBar.default, {
    currImg: currentImage,
    setGlobalCurrentImage: setGlobalCurrentImage,
    images: images
  }), /*#__PURE__*/_react.default.createElement(_ExpandGalleryBtn.default, {
    isOpen: isOpenTab,
    switchAction: setIsOpenTab
  }), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => closeGallery(),
    type: "button",
    className: "gallery__expandGalleryBtn gallery__expandGalleryBtn_close"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _cross_lightgray.default,
    alt: "close gallery button"
  }))));
}

var _default = Gallery;
exports.default = _default;