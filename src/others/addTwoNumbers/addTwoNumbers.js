// Prompt:
// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(node) {
    if (this.head === null && this.tail === null) {
      this.head = node;
      this.tail = node;
      this.length += 1;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.tail = node;
    return this;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function addTwoNumbers(list1, list2) {
  const list1Arr = [];
  const list2Arr = [];
  const finalLinkedList = new LinkedList();
  let currentNode1 = list1.head;
  let currentNode2 = list2.head;


  do {
    list1Arr.unshift(currentNode1.value);
    list2Arr.unshift(currentNode2.value);
    currentNode1 = currentNode1.next;
    currentNode2 = currentNode2.next;
  } while (currentNode1 && currentNode2);
  let result = parseInt(list1Arr.join(''), 10) + parseInt(list2Arr.join(''), 10);
  result = result.toString().split('');

  while (result.length !== 0) {
    finalLinkedList.add(new Node(parseInt(result.pop(), 10)));
  }

  return finalLinkedList;
}

module.exports = {
  LinkedList,
  Node,
  addTwoNumbers,
};
