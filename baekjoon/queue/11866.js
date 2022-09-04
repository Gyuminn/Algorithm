const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineHandler = (line) => {
  const [N, K] = line.split(" ").map((v) => +v);
  let numbers = new LinkedList();
  let answer = [];

  for (let i = 1; i <= N; i++) {
    numbers.pushNode(i);
  }

  while (numbers.getSize() !== 0) {
    for (let i = 1; i < K; i++) {
      numbers.pushNode(numbers.shiftNode());
    }

    answer.push(numbers.shiftNode());
  }

  console.log(`<${answer.join(", ")}>`);
  process.exit();
};

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

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
    }

    this.tail = newNode;
    this.length += 1;
  }

  shiftNode() {
    const shiftItem = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return shiftItem.item;
  }

  getSize() {
    return this.length;
  }
}

rl.on("line", lineHandler);
