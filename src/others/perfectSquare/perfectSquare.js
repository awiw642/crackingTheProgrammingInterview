const perfectSquare = (val) => {
  let sqr = 1;
  let cacheVar = 3;

  if (val < 1) {
    return false;
  } else if (val === 1) {
    return true;
  }

  while (sqr <= val) {
    if (sqr === val) {
      return true;
    }
    sqr += cacheVar;
    cacheVar += 2;
  }
  return false;
};

module.exports = perfectSquare;
