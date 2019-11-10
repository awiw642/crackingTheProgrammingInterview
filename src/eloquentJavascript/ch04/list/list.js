// function arrayToList(array) {
//   if (array.length < 1 || !Array.isArray(array)) { return 'Please provide a valid array'; }
//   if (array.length === 1) {
//     return {
//       value: array[0],
//       rest: null,
//     };
//   }
//   return {
//     value: array[0],
//     rest: arrayToList(array.slice(1)),
//   };
// }

function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}

function prepend(element, list) {
  return { value: element, rest: list };
}

function listToArray(list) {
  const result = [];
  let currentList = list;
  do {
    result.push(currentList.value);
    currentList = currentList.rest;
  } while (currentList);
  return result;
}

function nth(list, index) {
  if (!list) {
    return undefined;
  }
  if (index === 0) {
    return list.value;
  }
  return nth(list.rest, index - 1);
}

export {
  arrayToList,
  listToArray,
  prepend,
  nth,
};
