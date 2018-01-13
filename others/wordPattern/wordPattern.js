const checkPattern = (pattern) => {
  if (!pattern) {
    throw new Error();
  }
  if (pattern.split(' ').length > 1) {
    throw new Error();
  } else {
    return pattern;
  }
};

const wordPattern = (pattern, string) => {
  const patternArray = checkPattern(pattern).split('');
  const stringArray = string.split(' ');
  const patternMap = {};

  for (let i = 0; i < pattern.length; i++) {
    if (!patternMap[stringArray[i]]) {
      patternMap[stringArray[i]] = patternArray[i];
    } else {
      const patternValue = patternMap[stringArray[i]];
      if (!(patternValue === patternArray[i])) {
        return false;
      }
    }
  }
  return true;
};

module.exports = wordPattern;
