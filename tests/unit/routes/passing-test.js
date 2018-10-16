import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | passing', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:passing');
    assert.ok(route);
  });
});
