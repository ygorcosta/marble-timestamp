'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timestamp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalComponent = require('metal-component');

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalState = require('metal-state');

var _metalSoy = require('metal-soy');

var _metalSoy2 = _interopRequireDefault(_metalSoy);

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _syntax = require('./syntax');

var _TimestampSoy = require('./Timestamp.soy.js');

var _TimestampSoy2 = _interopRequireDefault(_TimestampSoy);

var _metal = require('metal');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Timestamp component.
 */
var Timestamp = function (_Component) {
  _inherits(Timestamp, _Component);

  function Timestamp() {
    _classCallCheck(this, Timestamp);

    return _possibleConstructorReturn(this, (Timestamp.__proto__ || Object.getPrototypeOf(Timestamp)).apply(this, arguments));
  }

  _createClass(Timestamp, [{
    key: 'attached',

    /**
     */
    value: function attached() {
      if ((0, _metal.isServerSide)()) {
        return;
      }
      if (this.createdAt) {
        relativeTimeSyntax('timestamp');
        var timestamp = parseInt(this.createdAt, 10);
        this.label = (0, _momentTimezone2.default)(timestamp).fromNow(true);
        if (this.hasTitle) {
          var timezone = _momentTimezone2.default.tz.guess();
          this.title = (0, _momentTimezone2.default)(timestamp).tz(timezone).format('MMM DD YYYY, h:mma (UTCZ)');
        }
      }
    }
  }]);

  return Timestamp;
}(_metalComponent2.default);

/**
 * State definition.
 * @static
 * @type {!Object}
 */


Timestamp.STATE = {
  childElementClasses: _metalState.Config.string().value(''),
  createdAt: _metalState.Config.number().value(0),
  elementClasses: _metalState.Config.string().value(''),
  label: _metalState.Config.string().internal(true).value(''),
  hasTitle: _metalState.Config.bool().value(false),
  title: _metalState.Config.string().value(undefined)
};

_metalSoy2.default.register(Timestamp, _TimestampSoy2.default);

exports.Timestamp = Timestamp;
exports.default = Timestamp;