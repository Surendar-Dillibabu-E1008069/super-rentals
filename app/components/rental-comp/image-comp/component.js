import Ember from 'ember';

const {
  Component,
  get,
  set
} = Ember;

export default Component.extend({
  tagName:'',
  isLarge: false,

  actions: {
    toggleSize() {
      set(this, 'isLarge', !get(this, 'isLarge'));
    }
  }
});
