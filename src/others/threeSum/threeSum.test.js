const threeSum = require('./threeSum');

test('Should return 3 subvalues', () => {
  const input = [1, -1, 0, 2, 3];
  expect(threeSum(input)[0].length).toEqual(3);
});

test('Should total to 0', () => {
  const input = [1, -1, 0, 2, 3];
  const element = threeSum(input)[0];
  const total = element[0] + element[1] + element[2];
  expect(total).toEqual(0);
});

test('Should return an empty array if the input is not given', () => {
  expect(threeSum()).toEqual([]);
});

test('Should return an empty array if the given array input does not contain any value', () => {
  expect(threeSum([])).toEqual([]);
});

test('Shold return multiple results if there are multiple answers', () => {
  const input = [1, 3, 4, -4, -2, -1];
  const result = [[1, 3, -4], [3, -2, -1]];
  expect(threeSum(input).length).toEqual(result.length);
});

test('Should return an empty array when the input length is less than 3', () => {
  const input = [1, 2];
  expect(threeSum(input)).toEqual([]);
});
