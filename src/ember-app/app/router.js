import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test-project-seller-l');
  this.route('i-i-s-test-project-seller-e',
  { path: 'i-i-s-test-project-seller-e/:id' });
  this.route('i-i-s-test-project-seller-e.new',
  { path: 'i-i-s-test-project-seller-e/new' });
});

export default Router;
