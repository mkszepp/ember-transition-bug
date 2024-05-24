import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service router;
  redirect() {
    super.redirect(...arguments);
    this.router.transitionTo('base');
  }
}
