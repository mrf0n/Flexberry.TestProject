import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test-project-shop', 'Unit | Serializer | i-i-s-test-project-shop', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test-project-shop',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-test-project-t-role',

    'model:i-i-s-test-project-seller',
    'model:i-i-s-test-project-shop',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
