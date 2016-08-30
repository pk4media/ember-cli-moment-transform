import DS from 'ember-data';
import moment from 'moment';

export default DS.Transform.extend({
  deserialize: function(serialized) {
    if (serialized) {
      let result = moment(serialized, moment.ISO_8601);
      if (moment.isMoment(result) && result.isValid()) {
        return result;
      }

      return null;
    } else {
      return serialized;
    }
  },

  serialize: function(deserialized) {
    if (moment.isMoment(deserialized)) {
      return deserialized.clone().toISOString();
    } else {
      return null;
    }
  }
});
