import flattening from './flattening';

test('flattening: Returns an array containing all the parameter elements', () => {
  const arr = [[1, 2, 3, 4], [5, 6, 7, 8, 9], [10, [11, 12, 13, [14]]]];
  const result = flattening(arr);
  expect(result.length).toBe(14);
  expect(result[4]).toBe(5);
  expect(result[10]).toBe(11);
});
