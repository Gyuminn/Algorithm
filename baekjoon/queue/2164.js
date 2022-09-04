const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
    this.prev = null;
  }
}

// Queue 자료구조를 위한 Doubly LinkedList
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  pushNode(item) {
    const newNode = new Node(item);

    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.length += 1;

    return newNode;
  }

  shiftNode() {
    this.head = this.head.next;
    this.head.prev = null;
    this.length -= 1;
  }

  getHead() {
    return this.head.item;
  }

  getSize() {
    return this.length;
  }
}

const lineHandler = (line) => {
  const N = Number(line);

  const cards = new LinkedList();

  for (let i = 1; i <= N; i++) {
    cards.pushNode(i);
  }

  while (cards.getSize() !== 1) {
    cards.shiftNode();
    cards.pushNode(cards.getHead());
    cards.shiftNode();
  }
  console.log(cards.getHead());
  process.exit();
};
rl.on("line", lineHandler);
