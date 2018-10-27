import {
  arrayToList,
  prepend,
  listToArray,
  nth,
} from './list';

test('arrayToList: Return an error message when the provided value is invalid', () => {
  const array = [];
  const otherObject = { list: 'test' };
  expect(arrayToList(array)).toBe('Please provide a valid array');
  expect(arrayToList(otherObject)).toBe('Please provide a valid array');
});

test('arrayToList: Returned object should have the required properties', () => {
  const array = [1, 2, 3, 4];
  const list = arrayToList(array);
  expect(list).toHaveProperty('value');
  expect(list).toHaveProperty('rest');
});

test('arrayToList: Returned object should contains all the elements of the given array', () => {
  const array = [1, 2, 3, 4];
  const list = arrayToList(array);
  expect(list.value).toBe(1);
  expect(list.rest.value).toBe(2);
  expect(list.rest.rest.value).toBe(3);
  expect(list.rest.rest.rest.value).toBe(4);
});

test('prepend: Generate a new list object', () => {
  const element1 = 20;
  const list1 = null;
  expect(prepend(element1, list1)).toHaveProperty('value');
  expect(prepend(element1, list1)).toHaveProperty('rest');
  expect(prepend(element1, list1).value).toBe(20);

  const element2 = 20;
  const list2 = { value: 10, rest: null };
  expect(prepend(element2, list2).value).toBe(20);
  expect(prepend(element2, list2).rest.value).toBe(10);

  const element3 = 30;
  expect(prepend(element3, prepend(element3, null)).rest.value).toBe(30);
});

test('listToArray: Should return an array of numbers', () => {
  const list = { value: 20, rest: { value: 21, rest: { value: 22, rest: null } } };
  const resultArray = listToArray(list);
  expect(resultArray).toHaveLength(3);
  expect(resultArray).toContain(22);
});

test('nth: Should return a value or undefined', () => {
  const list = { value: 1, rest: { value: 2, rest: { value: 3, rest: { value: 4, rest: null } } } };
  const validValue = 3;
  const invalidValue = 5;
  expect(nth(list, validValue)).toBe(2);
  expect(nth(list, invalidValue)).toBe(undefined);
});
