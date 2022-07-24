import Ember from 'ember';

const {
  inject: { service }
} = Ember;

export default Ember.Route.extend({
  store: service(),

  async model() {
    return this.store.findAll('rental');
  }
});
