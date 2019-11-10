const urlIfy = require('./urlIfy');

test('Replace space with %20', () => {
  const input1 = 'http:// test.com';
  const input2 = 'Mr John Smith';
  expect(urlIfy(input1)).toContain('%20');
  expect(urlIfy(input2)).toEqual('Mr%20John%20Smith');
});
