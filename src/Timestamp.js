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
    if (this.time) {
      updateMomentSyntax('timestamp');
      const timestamp = parseInt(this.time, 10);
      this.label = moment(timestamp).fromNow(true);
      if (this.hasTitle) {
        const timezone = moment.tz.guess();
        this.title = moment(timestamp)
          .tz(timezone)
          .format('MMM DD YYYY, h:mma (UTCZ)');
        console.log(this.title);
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
  elementClasses: Config.string().value(''),
  label: Config.string()
    .internal(true)
    .value(''),
  hasTitle: Config.bool().value(false),
  time: Config.number().value(0),
  title: Config.string().value(undefined),
};

Soy.register(Timestamp, templates);

export {Timestamp};
export default Timestamp;
