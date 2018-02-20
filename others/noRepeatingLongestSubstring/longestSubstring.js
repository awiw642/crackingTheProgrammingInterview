// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

const longestSubstring = (string) => {
  const input = string === undefined ? '' : string;
  const inputArray = input.split('');
  const result = inputArray.reduce((combination, curr) => {
    let substringChecker = { ...combination };
    if (!substringChecker[curr]) {
      substringChecker[curr] = true;
      if (!substringChecker.longestSub) {
        substringChecker.longestSub = curr;
      } else {
        substringChecker.longestSub = substringChecker.longestSub.concat(curr);
      }
    } else {
      const prevLongestSub = substringChecker.longestSub;
      const currLongestSub = substringChecker.currentLongestSub === undefined ? '' : substringChecker.currentLongestSub;
      substringChecker = { [curr]: true, longestSub: curr };

      if (currLongestSub.length < prevLongestSub.length) {
        substringChecker.currentLongestSub = prevLongestSub;
      } else {
        substringChecker.currentLongestSub = currLongestSub;
      }
    }

    return substringChecker;
  }, {});
  
  if (result.currentLongestSub === undefined) {
    result.currentLongestSub = result.longestSub;
  } else if (result.currentLongestSub.length < result.longestSub.length) {
    result.currentLongestSub = result.longestSub;
  }

  return result.currentLongestSub;
};

module.exports = longestSubstring;
