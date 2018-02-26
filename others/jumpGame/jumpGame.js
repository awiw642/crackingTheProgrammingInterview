// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// For example:
// A = [2,3,1,1,4], return true.

// A = [3,2,1,0,4], return false.

const jumpGame = (steps) => {
  if (steps.length === 1) {
    return true;
  } else if ((steps.length > 1 && steps[0] === 0) || steps.length === 0) {
    return false;
  }
  return jumpGame(steps.slice(steps[0]));
};

module.exports = jumpGame;
