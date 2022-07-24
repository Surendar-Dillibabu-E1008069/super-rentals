import Ember from 'ember';

const {
  inject: { service }
} = Ember;

export default Ember.Route.extend({
  store: service(),

  async model(params) {
    return this.store.findRecord('rental', params.rental_id);
  }
});
