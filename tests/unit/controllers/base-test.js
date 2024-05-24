import { module, test } from 'qunit';
import { setupTest } from 'ember-transition-bug/tests/helpers';

module('Unit | Controller | base', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:base');
    assert.ok(controller);
  });
});
