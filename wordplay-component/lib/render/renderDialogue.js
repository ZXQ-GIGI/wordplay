"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _render = _interopRequireDefault(require("./render"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RenderDialogue =
/*#__PURE__*/
function (_Render) {
  _inherits(RenderDialogue, _Render);

  function RenderDialogue() {
    _classCallCheck(this, RenderDialogue);

    return _possibleConstructorReturn(this, _getPrototypeOf(RenderDialogue).call(this));
  }

  _createClass(RenderDialogue, [{
    key: "draw",
    value: function draw(parentElement, options) {
      this.clear();
      this.initWrapperElement();
      parentElement.appendChild(this.wrapperElement);
      this.drawBackgroundImage(options.backgroundImage);
      this.drawNarration(options.narration);
      this.drawCaption(options.caption);
    }
  }, {
    key: "drawNarration",
    value: function drawNarration(narration) {
      this.drawBackgroundMusic(narration);
    }
  }, {
    key: "drawCaption",
    value: function drawCaption(caption) {
      if (!caption) {
        return;
      }

      var captionElement = document.createElement('div');
      captionElement.className = 'wp_caption';
      captionElement.setAttribute('style', 'position: absolute; left: 0; bottom: 0');
      var text = document.createElement('span');
      text.innerText = caption;
      captionElement.appendChild(text);
      this.wrapperElement.append(captionElement);
    }
  }]);

  return RenderDialogue;
}(_render.default);

exports.default = RenderDialogue;