const sol = (input) => {
  const [[N, M], ...board] = input;

  const oneIdx = [];

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let answer = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] == 1) {
        oneIdx.push([i, j]);
      }
    }
  }

  const bfs = () => {
    const visited = Array.from(Array(N), () => Array(M).fill(0));
    const queue = [];
    queue.push([0, 0]);
    visited[0][0] = 1;
    let cnt = 1;

    while (queue.length) {
      const [x, y] = queue.shift();
      let flag = 0;

      if (x == N - 1 && y == M - 1) {
        flag = 1;
        return cnt;
      }

      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];

        if (nx < 0 || nx >= N || ny < 0 || ny >= M || board[nx][ny]) {
          continue;
        }

        if (visited[nx][ny]) continue;
        console.log(nx, ny);
        visited[nx][ny] = 1;
        queue.push([nx, ny]);
        cnt++;
      }
    }

    if (!flag) {
      return -1;
    }
  };

  oneIdx.forEach((one) => {
    const [x, y] = one;
    board[x][y] = 0;
    answer = Math.min(answer, bfs());
    board[x][y] = 1;
  });

  return answer;
};

const input = [];
require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stedout,
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
