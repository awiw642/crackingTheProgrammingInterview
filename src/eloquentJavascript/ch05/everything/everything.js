export function everything(array, test) {
  const passed = array.filter(element => test(element));
  return passed.length === array.length;
}

export function everythingWithSome(array, test) {
  return !array.some(n => !test(n));
}
