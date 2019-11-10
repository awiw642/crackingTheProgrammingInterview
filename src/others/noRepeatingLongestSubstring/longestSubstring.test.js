const longestSubstring = require('./longestSubstring');

test('Returns the longest no repeating substring', () => {
  const string = 'apriantow';
  const string2 = 'pwwkew';
  expect(longestSubstring(string)).toEqual('antow');
  expect(longestSubstring(string2)).toEqual('wke');
});

test('Returns a character when only multiple of the same characters provided', () => {
  const string = 'bbbbbbbb';
  expect(longestSubstring(string)).toEqual('b');
});

test('Returns a character when only that character is supplied as a string', () => {
  const string = 'a';
  expect(longestSubstring(string)).toEqual('a');
});
