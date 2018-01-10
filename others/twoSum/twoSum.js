/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Output: Array of indices
Input: Array of numbers, sum target
Complexities/Constraints: none
Example: 
* ([2, 4, 6, 7], 10) => [[1, 2]]
* ([6, 5, 7, 2], 9) => [[2, 3]]
* ([6, 4, 5, 4], 10) => [[0, 1]]
*/

const twoSum = (arr, target) => {
  const result = [];
  const objectifiedArr = [];

  arr.forEach((number) => {
    objectifiedArr.push({ value: number, checked: false });
  });

  for (let i = 0; i < objectifiedArr.length - 1; i++) {
    if (objectifiedArr[i].checked) {
      continue;
    }
    for (let x = i + 1; x < objectifiedArr.length; x++) {
      if (objectifiedArr[x].checked) {
        continue;
      }

      if (objectifiedArr[i].value + objectifiedArr[x].value === target) {
        result.push([i, x]);
        objectifiedArr[i].checked = true;
        objectifiedArr[x].checked = true;
        break;
      }
    }
  }
  return result;
}

module.exports = twoSum;