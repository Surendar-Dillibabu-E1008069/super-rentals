import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

const {
  get,
  set
} = Ember;

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default Model.extend({
  title: attr('string'),
  owner: attr('string'),
  city: attr('string'),
  location: attr('string'),
  category: attr('string'),
  image: attr('string'),
  bedrooms: attr('string'),
  description: attr('string'),

  get type() {
    if (COMMUNITY_CATEGORIES.includes(this.category)) {
      return 'Community';
    } else {
      return 'Standalone';
    }
  }
});
