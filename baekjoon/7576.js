class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

// LinkedList로 Queue 구현
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
  const [[M, N], ...board] = input;

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const queue = new Queue();

  let ripeDay = 0;

  // 익은 토마토(1)를 찾아서 queue에 넣어준다.
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 1) {
        queue.pushNode([i, j]);
      }
    }
  }

  const BFS = () => {
    while (queue.length) {
      const [x, y] = queue.shiftNode();

      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];

        // 지도를 벗어나지 않고 익지않은 토마토(0)라면
        if (nx >= 0 && nx < N && ny >= 0 && ny < M && board[nx][ny] === 0) {
          board[nx][ny] = board[x][y] + 1;
          queue.pushNode([nx, ny]);
        }
      }
    }
  };

  // BFS를 통해 탐색
  BFS();

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // 익지 않은 토마토가 존재할 경우
      if (board[i][j] == 0) {
        return -1;
      }

      if (ripeDay < board[i][j]) {
        ripeDay = board[i][j];
      }
    }
  }
  return ripeDay - 1;
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length > input[0][1]) {
      console.log(sol(input));
      process.exit();
    }
  });
