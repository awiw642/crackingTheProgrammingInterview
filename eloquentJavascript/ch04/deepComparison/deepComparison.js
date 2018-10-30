function compareType(a, b) {
  return typeof a === typeof b;
}

function comparePrimitives(a, b) {
  return a === b;
}

function compareArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  const aDict = a.reduce((acc, curr) => {
    acc[curr] = true;
    return acc;
  }, {});
  for (let y = 0; y < b.length; y++) {
    if (!aDict[b[y]]) {
      return false;
    }
  }
  return true;
}

export default function deepEqual(a, b) {
  if (!compareType(a, b)) {
    return false;
  }
  if (typeof a === 'object' && a === null) { return comparePrimitives(a, b); }
  if (typeof a === 'object' && a !== null) {
    const isAArray = Array.isArray(a);
    const isBArray = Array.isArray(b);
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (isAArray && isBArray) {
      return compareArrays(a, b);
    }
    if (aKeys.length !== bKeys.length) {
      return false;
    }
    aKeys.filter((aElement, index) => deepEqual(aElement, b[bKeys[index]]));
    for (let i = 0; i < aKeys.length; i++) {
      if (aKeys[i] !== bKeys[i]) { return false; }
      return true;
    }
  }
  return comparePrimitives(a, b);
}
