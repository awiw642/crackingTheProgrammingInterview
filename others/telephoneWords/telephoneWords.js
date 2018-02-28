const phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ',
};


const telephoneWords = (digitString) => {
  const result = [];

  const transform = (digit, output) => {
    if (digit === undefined) { return; }

    if (digit.length === 0) {
      result.push(output);
      return;
    }

    const currentDigit = digit.charAt(0);
    const remainingDigit = digit.slice(1);
    const wordOptions = phoneDigitsToLetters[currentDigit].split('');

    for (let i = 0; i < wordOptions.length; i++) {
      transform(remainingDigit, output.concat(wordOptions[i]));
    }
  };

  transform(digitString, '');

  return result;
};

module.exports = telephoneWords;

