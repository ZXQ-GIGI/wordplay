"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _music = _interopRequireDefault(require("./music"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Render =
/*#__PURE__*/
function () {
  function Render() {
    _classCallCheck(this, Render);

    _defineProperty(this, "wrapperElement", void 0);
  }

  _createClass(Render, [{
    key: "initWrapperElement",
    value: function initWrapperElement() {
      this.wrapperElement = document.createElement('div');
      this.wrapperElement.className = 'wp_wrapper';
      this.wrapperElement.setAttribute('style', 'width: 100%; height: 100%; position: relative;');
    }
  }, {
    key: "getWrapperElement",
    value: function getWrapperElement() {
      return this.wrapperElement;
    }
  }, {
    key: "drawTitle",
    value: function drawTitle(title) {
      var titleElement = document.createElement('div');
      titleElement.className = 'wp_title';
      var text = document.createElement('span');
      text.innerText = title;
      titleElement.appendChild(text);
      this.wrapperElement.appendChild(titleElement);
    }
  }, {
    key: "drawSubTitle",
    value: function drawSubTitle(subTitle) {
      if (!subTitle) {
        return;
      }

      ;
      var subTitleElement = document.createElement('div');
      subTitleElement.className = 'wp_subtitle';
      var text = document.createElement('span');
      text.innerText = subTitle;
      subTitleElement.appendChild(text);
      this.wrapperElement.appendChild(subTitleElement);
    }
  }, {
    key: "drawBackgroundImage",
    value: function drawBackgroundImage(backgroundImage) {
      if (!backgroundImage) {
        return;
      }

      this.wrapperElement.style.backgroundImage = "url(".concat(backgroundImage, ")");
      this.wrapperElement.style.backgroundSize = 'cover';
    }
  }, {
    key: "drawBackgroundMusic",
    value: function drawBackgroundMusic(backgroundMusic) {
      if (!backgroundMusic) {
        return;
      }

      var music = new _music.default(this.wrapperElement, backgroundMusic); // music.play();
    }
  }, {
    key: "clear",
    value: function clear() {
      if (!this.wrapperElement) {
        return;
      }

      this.wrapperElement.innerHTML = '';
    }
  }]);

  return Render;
}();

exports.default = Render;