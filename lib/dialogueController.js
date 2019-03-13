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

var DialogueController =
/*#__PURE__*/
function () {
  function DialogueController(parentElement, dialogues, onNext) {
    _classCallCheck(this, DialogueController);

    _defineProperty(this, "parentElement", void 0);

    _defineProperty(this, "onEnd", void 0);

    _defineProperty(this, "dialogues", void 0);

    _defineProperty(this, "current", void 0);

    this.parentElement = parentElement;
    this.dialogues = dialogues;
    this.current = this.dialogues[0].name;
    this.onEnd = onNext;
  }

  _createClass(DialogueController, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      if (!this.canReady()) {
        console.warn("The property 'dialogues' is []");
        return;
      }

      this.clear();
      var currentDialogue = this.getCurrentDialogue();
      currentDialogue.start(this.parentElement, {
        onNext: function onNext() {
          return _this.onNext.apply(_this);
        },
        onJump: function onJump(name) {
          return _this.onJump.apply(_this, [name]);
        },
        onEnd: function onEnd() {
          return _this.onEnd.apply(_this);
        }
      });
    }
  }, {
    key: "onNext",
    value: function onNext() {
      var _this2 = this;

      var currentIndex = this.dialogues.findIndex(function (dialogue) {
        return dialogue.name === _this2.current;
      });
      var nextDialogueName = this.dialogues[currentIndex + 1] && this.dialogues[currentIndex + 1].name;
      this.setCurrentDialogue(nextDialogueName);
      this.ready();
    }
  }, {
    key: "onJump",
    value: function onJump(nextDialogueName) {
      this.setCurrentDialogue(nextDialogueName);
      this.ready();
    }
  }, {
    key: "getCurrentDialogue",
    value: function getCurrentDialogue() {
      var _this3 = this;

      return this.dialogues.filter(function (dialogue) {
        return dialogue.name === _this3.current;
      })[0];
    }
  }, {
    key: "setCurrentDialogue",
    value: function setCurrentDialogue(dialogueName) {
      if (!this.existName(dialogueName)) {
        throw new Error("'".concat(dialogueName, "' is invalid dialogue name."));
      }

      this.current = dialogueName;
    }
  }, {
    key: "existName",
    value: function existName(name) {
      return this.dialogues.filter(function (dialogue) {
        return dialogue.name === name;
      }).length > 0;
    }
  }, {
    key: "clear",
    value: function clear() {
      var cleaner = new _cleaner.default();
      cleaner.do(this.parentElement);
    }
  }, {
    key: "canReady",
    value: function canReady() {
      return !!this.dialogues.length;
    }
  }]);

  return DialogueController;
}();

exports.default = DialogueController;