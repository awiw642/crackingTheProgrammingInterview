const spiralMatrix = require('./spiralMatrix');

test('Returns an empty array when the matrix is empty', () => {
  const input = [];
  expect(spiralMatrix(input)).toEqual([]);
});

test('Returns correct values when the matrix only contains 2 rows', () => {
  const input = [[1, 2, 3], [4, 5, 6]];
  expect(spiralMatrix(input)).toEqual([1, 2, 3, 6, 5, 4]);
});

test('Returns correct values when the matrix only contains 1 row', () => {
  const input = [[1, 2, 3]];
  expect(spiralMatrix(input)).toEqual([1, 2, 3]);
});

test('Returns correct values when the matrix contains more than 3 rows', () => {
  const input = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
  expect(spiralMatrix(input)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
});
