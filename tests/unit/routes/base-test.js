import { module, test } from 'qunit';
import { setupTest } from 'ember-transition-bug/tests/helpers';

module('Unit | Route | base', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:base');
    assert.ok(route);
  });
});
