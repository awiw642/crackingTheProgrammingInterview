import ownLoop from './ownLoop';

test('ownLoop: Should run as many times as it passes the test function', () => {
  const val = 5;
  const testFunction = x => x > 0;
  const updateFunction = x => x - 1;
  const bodyFunction = jest.fn();
  ownLoop(val, testFunction, updateFunction, bodyFunction);
  expect(bodyFunction.mock.calls.length).toBe(5);
});
