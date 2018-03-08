const checkPermutation = (stringA, stringB) => {
  if (stringA.length !== stringB.length) { return false; }

  const stringASorted = stringA.toLowerCase().split('').sort().join();
  const stringBSorted = stringB.toLowerCase().split('').sort().join();

  return stringASorted === stringBSorted;
};

module.exports = checkPermutation;
