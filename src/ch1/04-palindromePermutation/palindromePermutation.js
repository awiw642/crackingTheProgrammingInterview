const palindromePermutation = (palindromeString) => {
  let totalCount = 0;
  const palindromeArray = palindromeString.toLowerCase().split('');
  const charList = palindromeArray.reduce((acc, char) => {
    if (acc[char] === undefined) {
      acc[char] = 1 
    } else {
      acc[char]++;
    }
    return acc;
  }, {});
  for (let char in charList) {
    totalCount += charList[char];
  }

  return totalCount <= (palindromeString.length * 2);
};

module.exports = palindromePermutation;

