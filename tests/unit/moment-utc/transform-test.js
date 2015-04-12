import {
  moduleFor,
  test
} from 'ember-qunit';
import moment from 'moment';

moduleFor('transform:moment-utc', 'Unit - Moment Transform', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var transform = this.subject();
  assert.ok(transform);
});

test('it deserializes valid data', function(assert) {
  assert.expect(2);
  var transform = this.subject();
  var result = transform.deserialize(moment().toISOString());
  assert.ok(moment.isMoment(result));
  assert.equal(result.isValid(), true);
});

test("it does not deserialize invalid data", function(assert) {
  assert.expect(2);
  var transform = this.subject();
  var result = transform.deserialize('asdfasdf');
  assert.equal(moment.isMoment(result), false);
  assert.equal(result, null);
});

test('it produces a utc moment object', function(assert) {
  assert.expect(1);
  var transform = this.subject();
  var result = transform.deserialize(moment().toISOString());
  assert.equal(result.isUTC(), true);
});
