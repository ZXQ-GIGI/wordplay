"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _chapter = _interopRequireDefault(require("./chapter"));

var _chapterController = _interopRequireDefault(require("./chapterController"));

var _renderStart = _interopRequireDefault(require("./render/renderStart"));

var _cleaner = _interopRequireDefault(require("./render/cleaner"));

var _renderEnd = _interopRequireDefault(require("./render/renderEnd"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var WordPlay =
/*#__PURE__*/
function () {
  function WordPlay() {
    var nodeId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var wordplay = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, WordPlay);

    _defineProperty(this, "rootElement", void 0);

    _defineProperty(this, "chapterController", void 0);

    _defineProperty(this, "author", void 0);

    _defineProperty(this, "title", void 0);

    _defineProperty(this, "subTitle", void 0);

    _defineProperty(this, "backgroundMusic", void 0);

    _defineProperty(this, "backgroundImage", void 0);

    _defineProperty(this, "conclusion", void 0);

    _defineProperty(this, "chapters", void 0);

    this.author = wordplay.author;
    this.title = wordplay.title;
    this.subTitle = wordplay.subTitle;
    this.backgroundMusic = wordplay.backgroundMusic;
    this.backgroundImage = wordplay.backgroundImage;
    this.conclusion = wordplay.conclusion;
    this.chapters = wordplay.chapters.map(function (chapter) {
      return new _chapter.default(chapter);
    });
    this.init(nodeId);
    this.enter();
  }

  _createClass(WordPlay, [{
    key: "enter",
    value: function enter() {
      var _this = this;

      var renderer = new _renderStart.default();
      renderer.draw(this.rootElement, {
        author: this.author,
        title: this.title,
        subTitle: this.subTitle,
        backgroundMusic: this.backgroundMusic,
        backgroundImage: this.backgroundImage,
        onStart: function onStart() {
          return _this.start.apply(_this);
        }
      });
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      this.clear();
      this.chapterController = new _chapterController.default(this.rootElement, this.chapters, function () {
        return _this2.end.apply(_this2);
      });
      this.chapterController.ready();
    }
  }, {
    key: "end",
    value: function end() {
      this.clear();
      var renderer = new _renderEnd.default();
      renderer.draw(this.rootElement, {
        conclusion: this.conclusion
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      var cleaner = new _cleaner.default();
      cleaner.do(this.rootElement);
    }
  }, {
    key: "init",
    value: function init(nodeId) {
      if (!this.isValidNode(nodeId)) {
        console.error("[Invalid Node]: '".concat(nodeId, "' does not exist."));
        return;
      }

      this.rootElement = document.getElementById(nodeId);
      this.setWidth(WordPlay.INIT_NODE_WIDTH);
      this.setHeight(WordPlay.INIT_NODE_HEIGHT);
      this.setBackgroundColor(WordPlay.INIT_NODE_BACKGROUND_COLOR);
    }
  }, {
    key: "isValidNode",
    value: function isValidNode(id) {
      return !!document.getElementById(id);
    }
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      if (!this.rootElement.style.width) {
        this.rootElement.style.width = "".concat(width, "px");
      }
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      if (!this.rootElement.style.height) {
        this.rootElement.style.height = "".concat(height, "px");
      }
    }
  }, {
    key: "setBackgroundColor",
    value: function setBackgroundColor(color) {
      if (!this.rootElement.style.backgroundColor) {
        this.rootElement.style.backgroundColor = color;
      }
    }
  }]);

  return WordPlay;
}();

exports.default = WordPlay;

_defineProperty(WordPlay, "INIT_NODE_WIDTH", 400);

_defineProperty(WordPlay, "INIT_NODE_HEIGHT", 300);

_defineProperty(WordPlay, "INIT_NODE_BACKGROUND_COLOR", 'rgba(123, 123, 123, .5)');