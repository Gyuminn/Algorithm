class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(item) {
    const node = new Node(item);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length += 1;
  }

  pop() {
    if (this.empty() == 1) return -1;
    const popItem = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return popItem.item;
  }

  size() {
    return this.length;
  }

  empty() {
    if (this.length == 0) {
      return 1;
    } else {
      return 0;
    }
  }

  front() {
    if (this.empty() == 1) return -1;
    return this.head.item;
  }

  back() {
    if (this.empty() == 1) return -1;
    return this.tail.item;
  }
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const lineHandler = (line) => {
  input.push(line.split(" "));

  if (input.length > Number(input[0][0])) {
    input.shift();
    let queue = new Queue();
    let answer = [];

    input.forEach((command) => {
      switch (command[0]) {
        case "push":
          queue.push(command[1]);
          break;
        case "pop":
          answer.push(queue.pop());
          break;
        case "size":
          answer.push(queue.size());
          break;
        case "empty":
          answer.push(queue.empty());
          break;
        case "front":
          answer.push(queue.front());
          break;
        case "back":
          answer.push(queue.back());
          break;
      }
    });
    console.log(answer.join(`\n`));
    process.exit();
  }
};
rl.on("line", lineHandler);
