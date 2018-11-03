export default function ownLoop(val, testFunction, updateFunction, bodyFunction) {
  let pivot = val;
  while (testFunction(pivot)) {
    bodyFunction(pivot);
    pivot = updateFunction(pivot);
  }
  return false;
}
