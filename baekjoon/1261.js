const sol = (input) => {
  const [[M, N], ...board] = input;

  const BFS = (sx, sy) => {
    const deque = [];
    deque.push([sx, sy, 0]);
    const visited = Array.from(Array(N), () => Array(M).fill(0));
    visited[sx][sy] = 1;
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    while (deque.length) {
      const [x, y, cnt] = deque.shift();
      if (x === N - 1 && y === M - 1) return cnt;

      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];
        if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
        if (visited[nx][ny] === 1) continue;

        visited[nx][ny] = 1;
        if (board[nx][ny] === 1) {
          board[nx][ny] = 0;
          deque.push([nx, ny, cnt + 1]);
        } else {
          deque.unshift([nx, ny, cnt]);
        }
      }
    }
  };

  return BFS(0, 0);
};

const input = [];
require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    if (input.length === 0) {
      input.push(line.split(" ").map((v) => +v));
    } else {
      input.push(line.split("").map((v) => +v));
    }

    if (input.length > input[0][1]) {
      console.log(sol(input));
      process.exit();
    }
  });
