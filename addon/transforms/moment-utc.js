import moment from 'moment';
import MomentTransform from './moment';

export default MomentTransform.extend({
  deserialize: function(serialized) {
    let result = this._super(serialized);

    if (moment.isMoment(result)) {
      return result.utc();
    }
  }
});
