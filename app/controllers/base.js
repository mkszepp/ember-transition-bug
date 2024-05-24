import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class BaseController extends Controller {
  @tracked messageType = null;

  queryParams = ['messageType'];
}
