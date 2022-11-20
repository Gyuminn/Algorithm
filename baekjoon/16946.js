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
    // 문제에 맞게 여기서 shift를 통해 배열을 반환한다.
    return shiftItem.item;
  }

  getSize() {
    return this.length;
  }
}

const sol = (input) => {
  const [[N, M], ...board] = input;

  const zerosIdx = [];

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const answer = Array.from(Array(N), () => Array(M).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 1) zerosIdx.push([i, j]);
    }
  }

  const bfs = (sx, sy) => {
    const queue = new Queue();
    queue.pushNode([sx, sy]);

    const visited = Array.from(Array(N), () => Array(M).fill(0));
    visited[sx][sy] = 1;
    let cnt = 1;

    while (queue.getSize()) {
      const [x, y] = queue.shiftNode();

      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];

        if (nx < 0 || nx >= N || ny < 0 || ny >= M || board[nx][ny]) continue;
        if (visited[nx][ny]) continue;
        queue.pushNode([nx, ny]);
        visited[nx][ny] = 1;
        cnt++;
      }
    }
    return cnt;
  };
  zerosIdx.forEach((zeros) => {
    const [x, y] = zeros;
    board[x][y] = 0;
    answer[x][y] = bfs(x, y);
    board[x][y] = 1;
  });

  return answer.map((ar) => ar.join("")).join(`\n`);
};
const input = [];
require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    if (input.length == 0) {
      input.push(line.split(" ").map((v) => +v));
    } else {
      input.push(line.split("").map((v) => +v));
    }

    if (input.length > input[0][0]) {
      console.log(sol(input));
      process.exit();
    }
  });
