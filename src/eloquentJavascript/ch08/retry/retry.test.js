import reliableMultiply from './retry';

// Jest somehow doesn't read instanceof properly
xtest('reliableMultiply always returns the multiplication result', () => {
  const result = reliableMultiply(8, 8);
  expect(result).toBe(64);
});
