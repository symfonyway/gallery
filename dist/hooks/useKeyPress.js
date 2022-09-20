"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

const useKeyPress = targetKey => {
  const [keyPressed, setKeyPressed] = (0, _react.useState)(false);

  const downHandler = _ref => {
    let {
      key
    } = _ref;
    if (key === targetKey) setKeyPressed(true);
  };

  const upHandler = _ref2 => {
    let {
      key
    } = _ref2;
    if (key === targetKey) setKeyPressed(false);
  };

  (0, _react.useEffect)(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);
  return keyPressed;
};

var _default = useKeyPress;
exports.default = _default;