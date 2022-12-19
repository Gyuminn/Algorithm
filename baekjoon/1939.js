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

    if (this.head == null) {
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

  getLength() {
    return this.length;
  }
}

const sol = (input) => {
  const [N, M] = input[0];
  const relation = input.slice(1, M + 1);
  const [start, end] = input[input.length - 1];

  const graph = Array.from(Array(N + 1), () => Array());

  relation.forEach((arr) => {
    const [a, b, c] = arr;
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  });

  graph.sort((a, b) => {
    return a[0] - b[0];
  });

  let min = 1;
  let max = 1000000000;
  let answer;

  const isPossible = (weight) => {
    const visited = Array.from({ length: N + 1 }, () => 0);

    const queue = new Queue();
    queue.pushNode(start);

    while (queue.getLength()) {
      const v = queue.shiftNode();
      if (v === end) return true;

      for (let i = 0; i < graph[v].length; i++) {
        const [nv, limit] = graph[v][i];
        if (visited[nv]) continue;
        if (weight > limit) continue;

        visited[nv] = 1;
        queue.pushNode(nv);
      }
    }

    return false;
  };

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);

    if (isPossible(mid)) {
      answer = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return answer;
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length === input[0][1] + 2) {
      console.table(sol(input));
      process.exit();
    }
  });
