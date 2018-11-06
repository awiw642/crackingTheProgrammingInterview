const palindromePermutation = require('./palindromePermutation');

test('Should return true for all palindromes', () => {
  const palindromeList = ['Anna', 'Civic', 'Repaper', 'Tact Coa'];
  palindromeList.forEach((palindromeWord) => {
    console.log(palindromeWord);
    expect(palindromePermutation(palindromeWord)).toBe(true);
  });
});
