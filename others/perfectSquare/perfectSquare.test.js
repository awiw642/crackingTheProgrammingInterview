const perfectSquare = require('./perfectSquare');

test('Should return true when the given value is 1', () => {
  const val = 1;
  expect(perfectSquare(val)).toBe(true);
});

test('Should return false when the given value is less than 1', () => {
  const val = 0;
  expect(perfectSquare(val)).toBe(false);
});

test('Should return true when the given value is a perfect square', () => {
  const val = 16;
  expect(perfectSquare(val)).toBe(true);
});

