function arrayToList(array) {
  if (array.length < 1 || !Array.isArray(array)) { return 'Please provide a valid array'; }
  if (array.length === 1) {
    return {
      value: array[0],
      rest: null,
    };
  }
  return {
    value: array[0],
    rest: arrayToList(array.slice(1)),
  };
}

function prepend(element, list) {
  return { value: element, rest: list };
}

function listToArray(list) {
  let filled = true;
  const resultArray = [];
  let currentNode = list;
  while (filled) {
    resultArray.push(currentNode.value);
    if (currentNode.rest) {
      currentNode = currentNode.rest;
    } else {
      filled = false;
    }
  }
  return resultArray;
}

function nth(list, number) {
  let position = 0;
  let currentList = list;
  let { value } = currentList;

  while (currentList) {
    if (value === number) {
      return position;
    }
    currentList = currentList.rest;
    if (currentList) {
      ({ value } = currentList);
    }
    position += 1;
  }
  return undefined;
}

export {
  arrayToList,
  listToArray,
  prepend,
  nth,
};
