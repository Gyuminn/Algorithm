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
  // 2차원 배열의 깊은 복사
  const maskBoard = board.map((row) => row.slice());

  // 테스트 케이스로 인해서 원본 배열을 수정하지 말고, 복사해서 쓰자.
  const answer = board.map((row) => row.slice());

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const zerosOfGroup = new Map();
  const zeroVisited = Array.from(Array(N + 1), () => Array(M + 1).fill(0));

  let group = 0;
  let zeroCnt = 1;

  const checkMask = (sx, sy, zeroCnt) => {
    const queue = new Queue();

    queue.pushNode([sx, sy]);
    zeroVisited[sx][sy] = 1;
    maskBoard[sx][sy] = group;

    while (queue.getSize()) {
      const [x, y] = queue.shiftNode();

      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];

        if (nx < 0 || nx >= N || ny < 0 || ny >= M || maskBoard[nx][ny] !== 0)
          continue;

        if (zeroVisited[nx][ny]) continue;

        zeroVisited[nx][ny] = 1;
        maskBoard[nx][ny] = group;
        queue.pushNode([nx, ny]);
        zeroCnt++;
      }
    }
    zerosOfGroup.set(group, zeroCnt);
  };

  const countZero = (sx, sy) => {
    const groupVisited = new Set();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [sx + dx[i], sy + dy[i]];
      if (nx < 0 || nx >= N || ny < 0 || ny >= M || board[nx][ny] !== 0)
        continue;

      const group = maskBoard[nx][ny];
      if (groupVisited.has(group)) continue;
      answer[sx][sy] += zerosOfGroup.get(group);
      groupVisited.add(group);
    }
    answer[sx][sy] = answer[sx][sy] % 10;
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (maskBoard[i][j] === 0) {
        group++;
        checkMask(i, j, zeroCnt);
        zeroCnt = 1;
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] == 1) {
        countZero(i, j);
      }
    }
  }

  return answer.map((row) => row.join("")).join(`\n`);
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
