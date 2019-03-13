"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _action = _interopRequireDefault(require("./action"));

var _renderDialogue = _interopRequireDefault(require("./render/renderDialogue"));

var _actionController = _interopRequireDefault(require("./actionController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Dialogue =
/*#__PURE__*/
function () {
  function Dialogue(dialogue) {
    _classCallCheck(this, Dialogue);

    _defineProperty(this, "parentElement", void 0);

    _defineProperty(this, "dialogueElement", void 0);

    _defineProperty(this, "actionController", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "narration", void 0);

    _defineProperty(this, "caption", void 0);

    _defineProperty(this, "duration", void 0);

    _defineProperty(this, "backgroundImage", void 0);

    _defineProperty(this, "actions", void 0);

    this.name = dialogue.name;
    this.narration = dialogue.narration;
    this.caption = dialogue.caption;
    this.duration = dialogue.duration;
    this.backgroundImage = dialogue.backgroundImage;
    this.actions = dialogue.actions && dialogue.actions.map(function (action) {
      return new _action.default(action);
    }) || [];
  }

  _createClass(Dialogue, [{
    key: "start",
    value: function start(parentElement, actionCallbacks) {
      this.parentElement = parentElement;
      this.render();

      if (!this.actions || !this.actions.length) {
        return;
      }

      this.actionController = new _actionController.default(this.dialogueElement, this.actions, {
        onNext: actionCallbacks.onNext,
        onJump: actionCallbacks.onJump,
        onEnd: actionCallbacks.onEnd
      });
      this.actionController.ready();
    }
  }, {
    key: "render",
    value: function render() {
      var renderder = new _renderDialogue.default();
      renderder.draw(this.parentElement, {
        backgroundImage: this.backgroundImage,
        narration: this.narration,
        caption: this.caption
      });
      this.dialogueElement = renderder.getWrapperElement();
    }
  }]);

  return Dialogue;
}();

exports.default = Dialogue;