import deepEqual from './deepComparison';

test('Primitive value comparison: returns true when the values are the same, returns false when different', () => {
  const a = 1;
  const b = 1;
  const c = 2;
  expect(deepEqual(a, b)).toBe(true);
  expect(deepEqual(a, c)).toBe(false);
});

test('Object value comparison: returns true when comparing 2 different objects with the same properties', () => {
  const a = { value: 1, rest: { value: 2 } };
  const b = { val: 1, rest: { val: 2 } };
  const c = { val: 1, rest: { val: 2 } };
  expect(deepEqual(a, b)).toBe(false);
  expect(deepEqual(b, c)).toBe(true);
});

test('Object value comparison: Able to iterate over 2 arrays to compare each element of the arrays', () => {
  const a = [1, 2, 3, 4];
  const b = [1, 2, 3, 4];
  const c = [1, 2, 3];
  const d = [2, 3, 4, 5];
  expect(deepEqual(a, b)).toBe(true);
  expect(deepEqual(a, c)).toBe(false);
  expect(deepEqual(a, d)).toBe(false);
});
