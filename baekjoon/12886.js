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
    return shiftItem;
  }

  getSize() {
    return this.length;
  }
}

const sol = (input) => {
  const [A, B, C] = input;
  const sum = A + B + C;
  if (sum % 3 !== 0) return 0;

  const visited = Array.from(Array(1501), () => Array(1501).fill(0));

  const bfs = () => {
    const queue = new Queue();
    queue.pushNode([A, B]);
    visited[A][B] = 1;

    while (queue.getSize()) {
      const [a, b] = queue.shiftNode().item;

      let temp = Array.from({ length: 3 });
      temp[0] = a;
      temp[1] = b;
      temp[2] = sum - a - b;

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (temp[i] < temp[j]) {
            const num1 = temp[i] * 2;
            const num2 = temp[j] - temp[i];

            if (visited[num1][num2]) continue;

            visited[num1][num2] = 1;
            queue.pushNode([num1, num2]);
          }
        }
      }
    }
  };
  bfs();
  return visited[sum / 3][sum / 3];
};
require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    const input = line.split(" ").map((v) => +v);
    console.log(sol(input));
    process.exit();
  });
