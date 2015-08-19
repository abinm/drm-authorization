"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Strategy = (function () {
  _createClass(Strategy, null, [{
    key: "requiredMethods",

    /**
     * Set required methods that subclasses must override.
     * @return {array} Array of method names.
     */
    get: function get() {
      return [];
    }

    /**
     * The abstract class, which is used to detect whether methods have been overridden or not.
     * @return {Class} Your Strategy subclass
     */
  }, {
    key: "abstractClass",
    get: function get() {
      return null;
    }
  }]);

  function Strategy() {
    var _this = this;

    _classCallCheck(this, Strategy);

    var abstractClass = this.constructor.abstractClass;

    this.constructor.requiredMethods.forEach(function (methodName) {
      if (_this[methodName] == undefined || _this[methodName] == abstractClass.prototype[methodName]) {
        throw new Error("Required method " + methodName + " must be implemented");
      }
    });
  }

  return Strategy;
})();

exports["default"] = Strategy;
module.exports = exports["default"];
