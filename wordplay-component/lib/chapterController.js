"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cleaner = _interopRequireDefault(require("./render/cleaner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ChapterController =
/*#__PURE__*/
function () {
  function ChapterController(rootElement, chapters, onEnd) {
    _classCallCheck(this, ChapterController);

    _defineProperty(this, "rootElement", void 0);

    _defineProperty(this, "chapters", void 0);

    _defineProperty(this, "current", void 0);

    _defineProperty(this, "onEnd", void 0);

    this.rootElement = rootElement;
    this.chapters = chapters;
    this.current = this.chapters[0] && this.chapters[0].name;
    this.onEnd = onEnd;
  }

  _createClass(ChapterController, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      if (!this.canReady) {
        console.warn("The property 'chapters' is []");
        return;
      }

      this.clear();
      var currentChapter = this.getCurrentChapter();
      currentChapter.start(this.rootElement, function () {
        return _this.onNext.apply(_this);
      });
    }
  }, {
    key: "onNext",
    value: function onNext() {
      var _this2 = this;

      var currentIndex = this.chapters.findIndex(function (chapter) {
        return chapter.name === _this2.current;
      });
      var nextChapterIndex = currentIndex + 1;

      if (nextChapterIndex === this.chapters.length) {
        this.onEnd();
        return;
      }

      var nextChapterName = this.chapters[nextChapterIndex] && this.chapters[nextChapterIndex].name;
      this.setCurrentChapter(nextChapterName);
      this.ready();
    }
  }, {
    key: "getCurrentChapter",
    value: function getCurrentChapter() {
      var _this3 = this;

      return this.chapters.filter(function (chapter) {
        return chapter.name === _this3.current;
      })[0];
      ;
    }
  }, {
    key: "setCurrentChapter",
    value: function setCurrentChapter(chapterName) {
      if (!this.existName(chapterName)) {
        throw new Error("[Invalid Chapter Name]: '".concat(chapterName, "' is invalid chapter name."));
      }

      this.current = chapterName;
    }
  }, {
    key: "existName",
    value: function existName(name) {
      return this.chapters.filter(function (chapter) {
        return chapter.name === name;
      }).length > 0;
    }
  }, {
    key: "clear",
    value: function clear() {
      var cleaner = new _cleaner.default();
      cleaner.do(this.rootElement);
    }
  }, {
    key: "canReady",
    value: function canReady() {
      return !!this.chapters.length;
    }
  }]);

  return ChapterController;
}();

exports.default = ChapterController;