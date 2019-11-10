const bubbleSort = require('./bubbleSort');

test('Returns an empty array when given an empty array', () => {
  const arrayUnsorted = [];
  expect(bubbleSort(arrayUnsorted)).toEqual([]);
});

test('Sort an unsorted array of numbers', () => {
  const arrayUnsorted = [6, 4, 1, 3, 2, 5];
  const arraySorted = [1, 2, 3, 4, 5, 6];
  expect(bubbleSort(arrayUnsorted)).toEqual(arraySorted);
});