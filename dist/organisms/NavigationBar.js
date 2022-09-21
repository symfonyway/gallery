"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Chevron = _interopRequireDefault(require("../molecules/Chevron"));

var _useKeyPress = _interopRequireDefault(require("../hooks/useKeyPress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function NavigationBar(_ref) {
  let {
    currImg,
    images,
    setGlobalCurrentImage
  } = _ref;

  const findNearestPositions = (images, newCurrImg) => {
    const index = images.findIndex(img => img === newCurrImg);

    if (index === images.length - 1) {
      setCurrentIndexImage(1);
      return setShowedPictures([images[images.length - 2], images[index], images[0]]);
    } else if (index === 0) {
      setCurrentIndexImage(1);
      return setShowedPictures([images[images.length - 1], images[index], images[1]]);
    } else if (index === -1) {
      return [];
    }

    setCurrentIndexImage(1);
    return setShowedPictures([images[index - 1], images[index], images[index + 1]]);
  };

  const [showedPictures, setShowedPictures] = (0, _react.useState)(images.slice(0, 3));
  const [currentIndexImage, setCurrentIndexImage] = (0, _react.useState)(currImg ? images.findIndex(el => el === currImg) : 0);

  const switchPictureRight = isRight => {
    let baseImages = [...showedPictures];

    if (isRight) {
      if (currentIndexImage === 2) {
        const index = images.findIndex(img => img === currImg);

        if (index === images.length - 1) {
          setGlobalCurrentImage(images[0]);
        } else {
          setGlobalCurrentImage(images[index + 1]);
        }
      } else {
        setCurrentIndexImage(currentIndexImage + 1);
        setGlobalCurrentImage(baseImages[currentIndexImage + 1]);
      }
    } else {
      if (currentIndexImage === 0) {
        const index = images.findIndex(img => img === currImg);

        if (index === 0) {
          setGlobalCurrentImage(images[images.length - 1]);
        } else {
          setGlobalCurrentImage(images[index - 1]);
        }
      } else {
        setCurrentIndexImage(currentIndexImage - 1);
        setGlobalCurrentImage(baseImages[currentIndexImage - 1]);
      }
    }

    setShowedPictures(baseImages);
  };

  const arrowLeftPressed = (0, _useKeyPress.default)('ArrowLeft');
  const arrowRightPressed = (0, _useKeyPress.default)('ArrowRight');
  (0, _react.useEffect)(() => {
    if (arrowLeftPressed) switchPictureRight(false);
  }, [arrowLeftPressed]);
  (0, _react.useEffect)(() => {
    if (arrowRightPressed) switchPictureRight(true);
  }, [arrowRightPressed]);
  (0, _react.useEffect)(() => {
    const indexOfImg = showedPictures.findIndex(img => currImg === img);

    if (indexOfImg !== -1) {
      setCurrentIndexImage(indexOfImg);
    } else {
      findNearestPositions(images, currImg, true);
    }
  }, [currImg]);
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: "gallery__navigationBar"
  }, images.length > 3 && /*#__PURE__*/_react.default.createElement(_Chevron.default, {
    onClick: () => switchPictureRight(false),
    direction: "left"
  }), showedPictures.map((img, index) => /*#__PURE__*/_react.default.createElement("li", {
    key: index + '-' + img,
    onClick: () => setGlobalCurrentImage(img),
    className: currentIndexImage === index ? '-activeImgInLi' : ''
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: img,
    alt: ""
  }))), images.length > 3 && /*#__PURE__*/_react.default.createElement(_Chevron.default, {
    onClick: () => switchPictureRight(true)
  }));
}

var _default = NavigationBar;
exports.default = _default;