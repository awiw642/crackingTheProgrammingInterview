import oneAway from './oneAway';

xtest('oneAway: Should return boolean', () => {
  const stringOne = 'bake';
  const stringTwo = 'pale';
  expect(typeof oneAway(stringOne, stringTwo)).toBe('boolean');
});

xtest('oneAway: Should return true when it is one edit away to similarise 2 strings and false when it is note', () => {
  const stringOne = 'pale';
  const stringTwo = 'ple';
  const stringThree = 'bake';

  expect(oneAway(stringOne, stringTwo)).toBeTruthy();
  expect(oneAway(stringOne, stringThree)).toBeFalsy();
});
