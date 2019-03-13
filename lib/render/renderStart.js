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

var RenderStart =
/*#__PURE__*/
function (_Render) {
  _inherits(RenderStart, _Render);

  function RenderStart() {
    _classCallCheck(this, RenderStart);

    return _possibleConstructorReturn(this, _getPrototypeOf(RenderStart).call(this));
  }

  _createClass(RenderStart, [{
    key: "draw",
    value: function draw(parentElement, options) {
      this.initWrapperElement();
      parentElement.appendChild(this.wrapperElement);
      this.drawTitle(options.title);
      this.drawSubTitle(options.subTitle);
      this.drawStartButton(options.onStart);
      this.drawAuthor(options.author);
      this.drawBackgroundMusic(options.backgroundMusic);
      this.drawBackgroundImage(options.backgroundImage);
    }
  }, {
    key: "drawAuthor",
    value: function drawAuthor(author) {
      var authorElement = document.createElement('div');
      authorElement.className = 'wp_author';
      var text = document.createElement('span');
      text.innerText = author;
      authorElement.appendChild(text);
      this.wrapperElement.appendChild(authorElement);
    }
  }, {
    key: "drawStartButton",
    value: function drawStartButton(onStart) {
      var startButton = document.createElement('button');
      startButton.className = 'wp_start';
      startButton.innerText = '开始';
      startButton.style.color = '#fff';
      startButton.onclick = onStart;
      this.wrapperElement.appendChild(startButton);
    }
  }]);

  return RenderStart;
}(_render.default);

exports.default = RenderStart;