const { Node, LinkedList, addTwoNumbers } = require('./addTwoNumbers');

test('Should return true when the addition is correct', () => {
  const list1 = new LinkedList();
  const list2 = new LinkedList();

  list1.add(new Node(7));
  list1.add(new Node(6));
  list1.add(new Node(5));

  list2.add(new Node(7));
  list2.add(new Node(6));
  list2.add(new Node(5));

  const finalList = addTwoNumbers(list1, list2);
  expect(finalList.head.value).toEqual(4);
});
