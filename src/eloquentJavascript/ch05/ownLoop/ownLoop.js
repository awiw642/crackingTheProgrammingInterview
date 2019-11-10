export default function ownLoop(val, testFunction, updateFunction, bodyFunction) {
  for (let y = val; testFunction(y); y = updateFunction(y)) {
    bodyFunction(y);
  }
  return false;
}
