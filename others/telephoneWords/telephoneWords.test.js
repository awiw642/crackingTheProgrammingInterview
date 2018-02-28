const telephoneWords = require('./telephoneWords');

test('Should be defined as a function', () => {
  expect(telephoneWords).toBeInstanceOf(Function);
});

test('Should return an empty array when no input given', () => {
  expect(telephoneWords()).toEqual([]);
});

test('Should return an array', () => {
  const input = '23';
  expect(telephoneWords(input)).toBeInstanceOf(Array);
});

test('Should return the permutation of 1', () => {
  const input = '0001';
  expect(telephoneWords(input)).toHaveLength(1);
  expect(telephoneWords(input)).toContain('0001');
});

test('Should include the right combinations', () => {
  const input = '23';
  expect(telephoneWords(input)).toContain('AD' && 'AE');
});
