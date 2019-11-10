export default function flattening(arr) {
  return arr.reduce((acc, curr) => {
    if (!Array.isArray(curr)) {
      return acc.concat(curr);
    }
    return acc.concat(flattening(curr));
  }, []);
}
