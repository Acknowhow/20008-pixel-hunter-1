import assert from 'assert';

let i = 1;
let display;
const start = new Date();
let timerId = setTimeout(display = () => {
  i++;
  const end = new Date();
  const elapsed = end - start;
  if (i <= 5) {
    setTimeout(display, 1000);
    return elapsed;
  }
  clearTimeout(timerId);
  return elapsed;
}, 1000);


describe(`Array`, () => {
  describe(`#indexOf()`, () => {
    it(`should return -1 when the value is not present`, () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});
describe(`Timeout`, () => {
  describe(`TimeElapsed`, () => {
    it(`should clearTimeout when the timeElapsed reaches 5 seconds`, () => {
      assert(display() <= 1000);
    });
  });
});
