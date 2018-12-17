// @flow

/*
string compression of repeated chars. If the compressed string is not shorter than the original, return the original.
*/
export default function stringCompression(string: string): string {
  const compressedResult = string.split('').reduce((acc, curr) => {
    if (curr === acc.currentChar) {
      acc.currentCount++;
    } if else (curr !== acc.currentChar) {
      acc.compressedString = acc.currentCount > 1 ? acc.compressedString.concat(acc.currentChar, acc.currentCount) : acc.currentChar;
    } else {
      acc.currentChar = curr;
      acc.currentCount = 1;
    }
    return acc;
  }, {
    currentChar: '',
    currentCount: 0,
    compressedString: '',
  });

  compressedResult.compressedString.length < string ? return compressedResult.compressedString : return string;
}