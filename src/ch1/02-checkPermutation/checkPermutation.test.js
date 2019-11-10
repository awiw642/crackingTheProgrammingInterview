const checkPermutation = require('./checkPermutation');

test('Returns true when a string is the permutation of the other string', () => {
  const input1 = 'aba';
  const input2 = 'baa';
  expect(checkPermutation(input1, input2)).toBeTruthy();
});

test('Returns false when the length of 2 string are different', () => {
  const input1 = 'aba';
  const input2 = 'aaba';
  expect(checkPermutation(input1, input2)).toBeFalsy();
});

