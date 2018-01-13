const wordPattern = require('./wordPattern');

test('Should return "true" when the pattern matches the string', () => {
  const pattern = 'abba';
  const string = 'cat dog dog cat';
  expect(wordPattern(pattern, string)).toBe(true);
});

test('Should return "false" when the pattern does not match the string', () => {
  const pattern = 'abcd';
  const string = 'dog cat pig dog';
  expect(wordPattern(pattern, string)).toBe(false);
});

test('Should return "error" when the pattern is not defined', () => {
  const string = 'dog cat cat dog';
  expect(() => wordPattern(null, string)).toThrow();
});

test('Should return "error" when the pattern contains spaces', () => {
  const string = 'dog cat cat dog';
  expect(() => wordPattern(string, string)).toThrow();
});
