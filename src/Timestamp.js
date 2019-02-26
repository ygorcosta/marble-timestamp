import Component from 'metal-component';
import {Config} from 'metal-state';
import Soy from 'metal-soy';
import moment from 'moment-timezone';
import {updateMomentSyntax} from './syntax';
import templates from './Timestamp.soy.js';
import {isServerSide} from 'metal';


/**
 * Timestamp component.
 */
class Timestamp extends Component {
  /**
   */
  attached() {
    if (isServerSide()) {
      return;
    }
    if (this.createdAt) {
      relativeTimeSyntax('timestamp');
      const timestamp = parseInt(this.createdAt, 10);
      this.label = moment(timestamp).fromNow(true);
      if (this.hasTitle) {
        const timezone = moment.tz.guess();
        this.title = moment(timestamp)
          .tz(timezone)
          .format('MMM DD YYYY, h:mma (UTCZ)');
      }
    }
  }
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
Timestamp.STATE = {
  childElementClasses: Config.string().value(''),
  createdAt: Config.number().value(0),
  elementClasses: Config.string().value(''),
  label: Config.string()
    .internal(true)
    .value(''),
  hasTitle: Config.bool().value(false),
  title: Config.string().value(undefined),
};

Soy.register(Timestamp, templates);

export {Timestamp};
export default Timestamp;
