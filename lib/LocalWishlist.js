'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _WishlistStrategy2 = require('./WishlistStrategy');

var _WishlistStrategy3 = _interopRequireDefault(_WishlistStrategy2);

var LocalWishlist = (function (_WishlistStrategy) {
  _inherits(LocalWishlist, _WishlistStrategy);

  function LocalWishlist() {
    _classCallCheck(this, LocalWishlist);

    _get(Object.getPrototypeOf(LocalWishlist.prototype), 'constructor', this).call(this);

    this.items = {};
  }

  _createClass(LocalWishlist, [{
    key: 'add',
    value: function add(id, callback) {
      // process.nextTick emulates an asychronous task such as a network request.
      process.nextTick(function () {
        items[id] = true;
        console.log('add', id);

        callback(null, id);
      });
    }
  }, {
    key: 'remove',
    value: function remove(id, callback) {
      process.nextTick(function () {
        if (items[id] == undefined) {
          callback(new _WishlistStrategy2.WishlistStrategyError('Wishlist item with id ' + id + ' was not found or is invalid', 404), null);
        } else {
          delete items[id];

          callback(null, id);
        }
      });
    }
  }, {
    key: 'list',
    value: function list(options, callback) {
      var _this = this;

      process.nextTick(function () {
        callback(null, _underscore2['default'].keys(_this.items));
      });
    }
  }]);

  return LocalWishlist;
})(_WishlistStrategy3['default']);

exports['default'] = LocalWishlist;
module.exports = exports['default'];
