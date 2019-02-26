'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.Timestamp = undefined;

var _metalComponent = require('metal-component');

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = require('metal-soy');

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {
  var soy = goog.require('soy');
  var soydata = goog.require('soydata');
  // This file was automatically generated from Timestamp.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Timestamp.
   * @public
   */

  goog.module('Timestamp.incrementaldom');

  var incrementalDom = goog.require('incrementaldom');
  var soyIdom = goog.require('soy.idom');

  /**
   * @param {Object<string, *>=} opt_data
   * @param {Object<string, *>=} opt_ijData
   * @param {Object<string, *>=} opt_ijData_deprecated
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
    opt_ijData = opt_ijData_deprecated || opt_ijData;
    incrementalDom.elementOpenStart('div');
    incrementalDom.attr('class', opt_data.elementClasses);
    incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('span');
    incrementalDom.attr('class', opt_data.childElementClasses);
    incrementalDom.attr('data-time', opt_data.time);
    if (opt_data.hasTitle) {
      incrementalDom.attr('data-title', opt_data.title);
    }
    incrementalDom.elementOpenEnd();
    soyIdom.print(opt_data.label);
    incrementalDom.elementClose('span');
    incrementalDom.elementClose('div');
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'Timestamp.render';
  }

  exports.render.params = ["time", "childElementClasses", "elementClasses", "label", "hasTitle", "title"];
  exports.render.types = { "time": "any", "childElementClasses": "any", "elementClasses": "any", "label": "any", "hasTitle": "any", "title": "any" };
  exports.templates = templates = exports;
  return exports;
});

var Timestamp = function (_Component) {
  _inherits(Timestamp, _Component);

  function Timestamp() {
    _classCallCheck(this, Timestamp);

    return _possibleConstructorReturn(this, (Timestamp.__proto__ || Object.getPrototypeOf(Timestamp)).apply(this, arguments));
  }

  return Timestamp;
}(_metalComponent2.default);

_metalSoy2.default.register(Timestamp, templates);
exports.Timestamp = Timestamp;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */