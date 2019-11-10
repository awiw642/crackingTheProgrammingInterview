function reverseArray(array) {
  const result = [];
  for (let y = array.length - 1; y >= 0; y--) {
    result.push(array[y]);
  }
  return result;
}

function reverseArrayInPlace(array) {
  let reverseCount = 0;
  while (reverseCount < array.length) {
    const lastNumber = array.pop();
    array.splice(reverseCount, 0, lastNumber);
    reverseCount++;
  }
  return array;
}


export {
  reverseArray,
  reverseArrayInPlace,
};
