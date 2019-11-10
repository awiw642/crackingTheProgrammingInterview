const MedianStream = require('./medianStream');

test('Get the median value of odd stream', () => {
  const stream = new MedianStream();
  stream.insert(1);
  stream.insert(8);
  stream.insert(1);
  expect(stream.peekMedian()).toEqual(1);
});

test('Get the median value of even stream', () => {
  const stream = new MedianStream();
  stream.insert(1);
  stream.insert(2);
  stream.insert(3);
  stream.insert(4);
  expect(stream.peekMedian()).toEqual(2.5);
});

test('Get the median, when the insertion is backwards', () => {
  const stream = new MedianStream();
  stream.insert(4);
  stream.insert(3);
  stream.insert(2);
  stream.insert(1);
  expect(stream.peekMedian()).toEqual(2.5);
});