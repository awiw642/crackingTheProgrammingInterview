// @flow

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a: number, b: number) {
  if (Math.random() < 0.2) {
    return a * b;
  }
  throw new MultiplicatorUnitFailure('Klunk');
}

export default function reliableMultiply(a: number, b: number) {
  try {
    return primitiveMultiply(a, b);
  } catch (e) {
    if (e instanceof MultiplicatorUnitFailure) {
      return reliableMultiply(a, b);
    }
  }
}
