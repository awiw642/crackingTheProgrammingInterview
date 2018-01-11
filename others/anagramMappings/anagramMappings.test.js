const anagramMappings = require('./anagramMappings');


test('Should return the correct value for all unique inputs', () => {
  const array1 = [12, 28, 46, 32, 50];
  const array2 = [50, 12, 32, 46, 28];
  expect(anagramMappings(array1, array2)).toEqual([1, 4, 3, 2, 0]);
});

test('Should return the correct value for non unique base array input', () => {
  const array1 = [12, 28, 46, 32, 50, 12, 28];
  const array2 = [50, 12, 32, 46, 28];
  expect(anagramMappings(array1, array2)).toEqual([1, 4, 3, 2, 0]);
});

test('Should return the correct result for non unique second input', () => {
  const array1 = [12, 28, 46, 32, 50];
  const array2 = [50, 12, 32, 46, 28, 50, 28, 12];
  expect(anagramMappings(array1, array2)).toEqual([1, 4, 3, 2, 0]);
});
