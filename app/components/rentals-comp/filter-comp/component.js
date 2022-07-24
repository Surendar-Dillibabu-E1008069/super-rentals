import Ember from 'ember';

const {
  Component,
  get,
  set
} = Ember;

export default Component.extend({
  rentals: null,
  query: null,
  tagName: '',

  results: function() {
    let qry = get (this,'query');
    let items = get(this, 'rentals');

    if (qry != undefined) {
      console.log('Before filter length :'+items.length);
      items = items.filter((rental) => {
        return get(rental, 'title').includes(qry);
      });
      console.log('After filter length :'+items.length);
      set(this, 'rentals', items);
    }
    console.log('Final length :'+items.length);

    return items;
  }.observes('query', 'model').on('init')
});
