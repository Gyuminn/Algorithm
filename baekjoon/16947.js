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
}
const sol = (input) => {
  const [[N], ...relation] = input;

  const visited_DFS = Array.from({ length: N + 1 }, () => 0);
  const graph = Array.from(Array(N + 1), () => Array());
  const checkCycle = Array.from({ length: N + 1 }, () => 0);
  const answer = [];

  let flag = 0;

  for (let [a, b] of relation) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const DFS = (v, sv, line) => {
    if (flag) return;

    for (let i = 0; i < graph[v].length; i++) {
      const nv = graph[v][i];
      if (visited_DFS[nv] === 0) {
        visited_DFS[nv] = 1;
        DFS(nv, sv, line + 1);
        visited_DFS[nv] = 0;
      } else if (nv === sv && line >= 2) {
        flag = 1;
        checkCycle[sv] = 1;
        return;
      }
    }
  };

  const BFS = (v) => {
    const queue = new Queue();
    const visited_BFS = Array.from({ length: N + 1 }, () => 0);
    visited_BFS[v] = 1;

    queue.pushNode([v, 0]);

    while (queue.length) {
      const [v, cnt] = queue.shiftNode();
      if (checkCycle[v] === 1) {
        return cnt;
      }

      for (let i = 0; i < graph[v].length; i++) {
        const nv = graph[v][i];
        if (visited_BFS[nv] === 0) {
          visited_BFS[nv] = 1;
          queue.pushNode([nv, cnt + 1]);
        }
      }
    }
  };

  for (let i = 1; i <= N; i++) {
    visited_DFS[i] = 1;
    DFS(i, i, 0);
    visited_DFS[i] = 0;
    flag = 0;
  }

  for (let i = 1; i <= N; i++) {
    if (checkCycle[i] === 1) {
      answer.push(0);
    } else {
      answer.push(BFS(i));
    }
  }

  return answer.join(" ");
};
const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length > input[0][0]) {
      console.log(sol(input));
      process.exit();
    }
  });
