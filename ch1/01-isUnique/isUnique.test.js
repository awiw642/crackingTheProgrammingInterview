const isUnique = require('./isUnique');

test('Returns false when there is no string provided', () => {
  expect(isUnique()).toBe(false);
});

test('Returns false when there are 2 "b" letters', () => {
  const string = 'abntob';
  expect(isUnique(string)).toBe(false);
});

test('Returns true when all the characters in the string are unique', () => {
  const string = 'abcdefghijklmnopqrstu';
  expect(isUnique(string)).toBe(true);
});