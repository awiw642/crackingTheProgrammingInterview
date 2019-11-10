import { oneAway } from './oneAway';

test('oneAway: Should return boolean', () => {
  const stringOne = 'bake';
  const stringTwo = 'pale';
  expect(typeof oneAway(stringOne, stringTwo)).toBe('boolean');
});

test('oneAway: Handle replace situation', () => {
  const stringOne = 'bale';
  const stringTwo = 'male';
  expect(oneAway(stringOne, stringTwo)).toBe(true);
});

test('oneAway: Should return true when it is one edit away to similarise 2 strings and false when it is not', () => {
  const stringOne = 'pale';
  const stringTwo = 'ple';
  const stringThree = 'bake';

  expect(oneAway(stringOne, stringTwo)).toBeTruthy();
  expect(oneAway(stringOne, stringThree)).toBeFalsy();
});
