"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ActionController =
/*#__PURE__*/
function () {
  function ActionController(parentElement, actions, actionCallbacks) {
    _classCallCheck(this, ActionController);

    _defineProperty(this, "parentElement", void 0);

    _defineProperty(this, "actions", void 0);

    _defineProperty(this, "actionCallbacks", void 0);

    this.parentElement = parentElement;
    this.actions = actions;
    this.actionCallbacks = actionCallbacks;
  }

  _createClass(ActionController, [{
    key: "ready",
    value: function ready() {
      this.render(this.actionCallbacks);
    }
  }, {
    key: "render",
    value: function render(actionCallbacks) {
      if (!this.actions) {
        return;
      }

      var actionsWrapper = document.createElement('div');
      actionsWrapper.setAttribute('style', 'position: absolute; right: 0; bottom: 0; display: inline-block');
      this.actions.forEach(function (action) {
        action.start(actionsWrapper, actionCallbacks);
      });
      this.parentElement.appendChild(actionsWrapper);
    }
  }]);

  return ActionController;
}();

exports.default = ActionController;