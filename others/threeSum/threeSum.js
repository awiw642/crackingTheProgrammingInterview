// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note: The solution set must not contain duplicate triplets.

// For example, given array S = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// TODO: The solution needs to be improved. Big O is quadratic -> (O)n3.

const threeSum = (input) => {
  const result = [];
  if (input === undefined || input.length < 3) {
    return result;
  }
  for (let i = 0; i < input.length - 2; i++) {
    for (let x = i + 1; x < input.length - 1; x++) {
      for (let y = x + 1; y < input.length; y++) {
        const totalCheckArray = [input[i], input[x], input[y]];
        const totalCheck = input[i] + input[x] + input[y];
        if (totalCheck === 0) {
          result.push(totalCheckArray);
        }
      }
    }
  }
  return result;
};

module.exports = threeSum;
