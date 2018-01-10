const bubbleSort = (array) => {
	let swapped;
  if (array.length === 0) {return array}
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

module.exports = bubbleSort;

// Time Complexity: O(n square)