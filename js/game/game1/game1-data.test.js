// Sample test file
import assert from 'assert';

const sum = (left, right) => left + right;

const equals = (expected, actual) => {
  if (expected !== actual) {
    throw new Error(`Expected ${expected} equal to ${actual}`);
  }
};
const notEquals = (expected, actual) => {
  if (expected === actual) {
    throw new Error(`Expected ${expected} not equal to ${actual}`);
  }
};

describe(`Array`, () => {
  describe(`#indexOf()`, () => {
    it(`should return -1 when the value is not present`, () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});
describe(`Sum`, () => {
  it(`should sum 2 and 2 correctly`, () => {
    equals(sum(2, 2), 4);
    notEquals(sum(2, 4), 4);
  });
});

