const jumpGame = require('./jumpGame');

test('Returns true when able to reach the end', () => {
  const input = [2, 3, 1, 1, 4];
  expect(jumpGame(input)).toBe(true);
});

test('Returns false when unable to reach the end', () => {
  const input = [3, 2, 1, 0, 4];
  expect(jumpGame(input)).toBe(false);
});

test('Returns false when jump out of bounds', () => {
  const input = [1, 2, 1, 2, 1];
  expect(jumpGame(input)).toBe(false);
});
