const twoSum = require('./twoSum');

test('Returns an empty array when there are no values that sum to the target value', () => {
  const arr = [2, 3, 4, 5, 6];
  const target = 12;
  expect(twoSum(arr, target)).toEqual([]);
});

test('Returns the correct indices for the sum target 10', () => {
  const arr = [4, 6, 9, 2, 3];
  const target = 10;
  expect(twoSum(arr, target)).toEqual([[0, 1]]);
});

test('Returns multiple arrays when there are multiple answers', () => {
  const arr = [4, 6, 1, 2, 3, 4, 6];
  const target = 10;
  expect(twoSum(arr, target)).toEqual([[0, 1], [5, 6]]);
})