/*
Prompt:

Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures.
*/

const isUnique = (string) => {
  if (!string) {
    return false;
  }
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string.charAt(i) === string.charAt(j)) {
        return false;
      }
    }
  }
  return true;
}

export default isUnique;