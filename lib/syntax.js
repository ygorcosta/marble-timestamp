'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMomentSyntax = updateMomentSyntax;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Updates moment.js timestamp syntax
 * @param {string} type
 * @return {Object}
 */
function updateMomentSyntax() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'timestamp';

  var relativeTimeObject = {};

  if (type === 'timestamp') {
    relativeTimeObject = {
      relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'now',
        ss: '%d sec ago',
        m: '1 min ago',
        mm: '%d min ago',
        h: '1 hour ago',
        hh: '%d hours ago',
        d: '1 day ago',
        dd: '%d days ago',
        M: '1 month ago',
        MM: '%d months ago',
        y: '1 year ago',
        yy: '%d years ago'
      }
    };
  } else if (type === 'duration') {
    relativeTimeObject = {
      relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'now',
        ss: '%ds',
        m: '1min',
        mm: '%dmin',
        h: '1h',
        hh: '%dh',
        d: '1d',
        dd: '%dd',
        M: '1mo',
        MM: '%dmo',
        y: '1y',
        yy: '%dy'
      }
    };
  }

  return _moment2.default.updateLocale('en', relativeTimeObject);
}