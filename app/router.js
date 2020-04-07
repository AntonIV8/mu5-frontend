import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-mu5-a3-l');
  this.route('i-i-s-mu5-a3-e',
  { path: 'i-i-s-mu5-a3-e/:id' });
  this.route('i-i-s-mu5-a3-e.new',
  { path: 'i-i-s-mu5-a3-e/new' });
});

export default Router;
