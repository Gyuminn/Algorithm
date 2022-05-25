const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line);

  if (input.length > Number(input[0])) {
    testQueue(input);
    rl.close();
  }
};

// class로 queue 구현하기
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
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length += 1;
  }

  pop() {
    if (this.length == 0) {
      return -1;
    } else {
      const popItem = this.head.item;
      this.head = this.head.next;
      this.length -= 1;
      return popItem;
    }
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
    if (this.length == 0) {
      return -1;
    } else {
      return this.head.item;
    }
  }

  back() {
    if (this.length == 0) {
      return -1;
    } else {
      return this.tail.item;
    }
  }
}

let q = new Queue();
let answer = [];

const testQueue = (arr) => {
  const n = Number(arr[0]);
  arr.shift();

  for (let i = 0; i < n; i++) {
    const command = arr[i];
    switch (command) {
      case "front":
        answer.push(q.front());
        break;
      case "back":
        answer.push(q.back());
        break;
      case "size":
        answer.push(q.size());
        break;
      case "empty":
        answer.push(q.empty());
        break;
      case "pop":
        answer.push(q.pop());
        break;
      default:
        const [_, value] = command.split(" ");
        q.push(+value);
        break;
    }
  }
  console.log(answer.join(`\n`));
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
