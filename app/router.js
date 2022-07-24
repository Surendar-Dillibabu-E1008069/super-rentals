import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('about');
  this.route('contact'); // This route will be used if you want to access the page using /contact URL
  this.route('contact', { path: '/getting-in-touch' });
  this.route('rental-comp', { path: '/rental/:rental_id' });
});

export default Router;
