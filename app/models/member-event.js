import DS from 'ember-data';
import Event from './event';

export default Event.extend({
  member: DS.attr('user')
});
