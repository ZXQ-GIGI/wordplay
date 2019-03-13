"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dialogue = _interopRequireDefault(require("./dialogue"));

var _renderChapter = _interopRequireDefault(require("./render/renderChapter"));

var _cleaner = _interopRequireDefault(require("./render/cleaner"));

var _dialogueController = _interopRequireDefault(require("./dialogueController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Chapter =
/*#__PURE__*/
function () {
  function Chapter(chapter) {
    _classCallCheck(this, Chapter);

    _defineProperty(this, "rootElement", void 0);

    _defineProperty(this, "chapterElement", void 0);

    _defineProperty(this, "dialogueController", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "title", void 0);

    _defineProperty(this, "subTitle", void 0);

    _defineProperty(this, "backgroundMusic", void 0);

    _defineProperty(this, "backgroundImage", void 0);

    _defineProperty(this, "duration", void 0);

    _defineProperty(this, "transition", void 0);

    _defineProperty(this, "dialogues", void 0);

    _defineProperty(this, "onNext", void 0);

    this.name = chapter.name;
    this.title = chapter.title;
    this.subTitle = chapter.subTitle;
    this.backgroundMusic = chapter.backgroundMusic;
    this.backgroundImage = chapter.backgroundImage;
    this.duration = chapter.duration || 1;
    this.transition = chapter.transition;
    this.dialogues = chapter.dialogues.map(function (dialogue) {
      return new _dialogue.default(dialogue);
    });
  }

  _createClass(Chapter, [{
    key: "start",
    value: function start(rootElement, onNext) {
      this.rootElement = rootElement;
      this.onNext = onNext;
      this.enter();
    }
    /** 章节的入口渲染 */

  }, {
    key: "enter",
    value: function enter() {
      var _this = this;

      var renderer = new _renderChapter.default();
      renderer.draw(this.rootElement, {
        title: this.title,
        subTitle: this.subTitle,
        backgroundImage: this.backgroundImage,
        backgroundMusic: this.backgroundMusic
      });
      this.holdTime(function () {
        return _this.enterDialogue.apply(_this);
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      var cleaner = new _cleaner.default();
      cleaner.do(this.rootElement);
    }
  }, {
    key: "holdTime",
    value: function holdTime(callback) {
      setTimeout(function () {
        callback();
      }, this.duration * Chapter.MS_1000);
    }
  }, {
    key: "enterDialogue",
    value: function enterDialogue() {
      this.clear();
      this.dialogueController = new _dialogueController.default(this.rootElement, this.dialogues, this.onNext);
      this.dialogueController.ready();
    }
  }]);

  return Chapter;
}();

exports.default = Chapter;

_defineProperty(Chapter, "MS_1000", 1000);