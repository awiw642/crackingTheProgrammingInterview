import { reverseArray, reverseArrayInPlace } from './reverse';

test('ReverseArrayInPlace should be the same as the built-in array reverse method', () => {
  const array = [1, 2, 3, 4, 5];
  expect(reverseArrayInPlace(array)).toEqual(array.reverse());
  expect(reverseArrayInPlace(array)).toBe(array);
});

test('ReverseArray should not change the original item', () => {
  const array = [1, 2, 3, 4, 5];
  expect(reverseArray(array)).not.toBe(array);
  expect(reverseArray(array)).toEqual(array.reverse());
});
