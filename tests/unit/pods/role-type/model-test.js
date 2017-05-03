import { moduleForModel, test } from 'ember-qunit';

moduleForModel('role-type', 'Unit | Model | role type', {
  // Specify the other units that are required for this test.
  needs: ['model:discoverable-taxonomy-set', 'model:presentation-node', 'model:dimension-node']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
