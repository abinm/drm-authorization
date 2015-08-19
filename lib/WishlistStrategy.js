'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Strategy2 = require('./Strategy');

var _Strategy3 = _interopRequireDefault(_Strategy2);

var WishlistStrategyError = (function (_Error) {
  _inherits(WishlistStrategyError, _Error);

  function WishlistStrategyError(message, statusCode) {
    _classCallCheck(this, WishlistStrategyError);

    _get(Object.getPrototypeOf(WishlistStrategyError.prototype), 'constructor', this).call(this);
    this.message = message;
    this.stack = new Error().stack;
    this.name = this.constructor.name;
    this.statusCode = statusCode;
  }

  return WishlistStrategyError;
})(Error);

exports.WishlistStrategyError = WishlistStrategyError;

var WishlistStrategy = (function (_Strategy) {
  _inherits(WishlistStrategy, _Strategy);

  function WishlistStrategy() {
    _classCallCheck(this, WishlistStrategy);

    _get(Object.getPrototypeOf(WishlistStrategy.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(WishlistStrategy, [{
    key: 'add',

    /**
     * Add an item uniquely to the wishlist.
     * @param {string} id The item’s identifier
     */
    value: function add(id) {
      throw new Error('WishlistStrategy#add must be implemented by subclass');
    }

    /**
     * Remove an item from the wishlist.
     * @param {string} id The item’s identifier
     */
  }, {
    key: 'remove',
    value: function remove(id) {
      throw new Error('WishlistStrategy#remove must be implemented by subclass');
    }

    /**
     * List all items in the wishlist.
     * @param {object} options Optional parameters for pagination, etc
     */
  }, {
    key: 'list',
    value: function list(options) {
      throw new Error('WishlistStrategy#list must be implemented by subclass');
    }
  }], [{
    key: 'requiredMethods',

    /**
     * Set required methods that subclasses must override.
     * @return {array} Array of method names.
     */
    get: function get() {
      return ['add', 'remove', 'list'];
    }
  }, {
    key: 'abstractClass',
    get: function get() {
      return WishlistStrategy;
    }
  }]);

  return WishlistStrategy;
})(_Strategy3['default']);

exports['default'] = WishlistStrategy;
