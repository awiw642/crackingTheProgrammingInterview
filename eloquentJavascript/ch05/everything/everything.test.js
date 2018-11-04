import { everythingWithLoop, everythingWithSome } from './everything';

test('It should return false when not all elements passed the test function', () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const testFunction = x => x >= 5;
  expect(everything(arr, testFunction)).toBe(false);
});
