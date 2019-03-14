"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _renderAction = _interopRequireDefault(require("./render/renderAction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Action =
/*#__PURE__*/
function () {
  function Action(action) {
    _classCallCheck(this, Action);

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "jump", void 0);

    _defineProperty(this, "onAction", void 0);

    this.type = action.type;
    this.name = action.name;
    this.jump = action.jump;
  }

  _createClass(Action, [{
    key: "start",
    value: function start(actionsWrapper, actionCallbacks) {
      this.bindEvent(actionCallbacks);
      this.render(actionsWrapper);
    }
  }, {
    key: "render",
    value: function render(actionsWrapper) {
      var _this = this;

      var renderer = new _renderAction.default();
      renderer.draw(actionsWrapper, {
        name: this.name,
        onAction: function onAction() {
          return _this.onAction(_this.jump);
        }
      });
    }
  }, {
    key: "bindEvent",
    value: function bindEvent(actionCallbacks) {
      if (!this.isValid()) {
        return;
      }

      if (this.type === Action.TYPE_NEXT) {
        this.onAction = actionCallbacks.onNext;
      }

      if (this.type === Action.TYPE_JUMP) {
        this.onAction = actionCallbacks.onJump;
      }

      if (this.type === Action.TYPE_END) {
        this.onAction = actionCallbacks.onEnd;
      }
    }
  }, {
    key: "isValid",
    value: function isValid() {
      var actionTypes = [Action.TYPE_NEXT, Action.TYPE_JUMP, Action.TYPE_END];

      if (actionTypes.indexOf(this.type) < 0) {
        throw new Error("[Invalid Action Type]: action type must be between 'next', 'jump' and 'end'.");
      }

      if (this.type === Action.TYPE_JUMP) {
        if (this.jump === undefined) {
          throw new Error("[Action Property]: property 'jump' is undefined.");
        }
      }

      return true;
    }
  }]);

  return Action;
}();

exports.default = Action;

_defineProperty(Action, "TYPE_NEXT", 'next');

_defineProperty(Action, "TYPE_JUMP", 'jump');

_defineProperty(Action, "TYPE_END", 'end');