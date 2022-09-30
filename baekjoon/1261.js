const sol = (input) => {
  const [[N, _, M], ...board] = input;

  const BFS = (sx, sy) => {
    const visited = Array.from(Array(M), () => Array(N).fill(0));
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    const deque = [];
    deque.push([sx, sy, 0]);
    visited[sx][sy] = 1;

    while (deque.length) {
      const [x, y, cnt] = deque.shift();
      if (x === M - 1 && y === N - 1) return cnt;

      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];
        if (nx >= 0 && nx < M && ny >= 0 && ny < N && visited[nx][ny] === 0) {
          visited[nx][ny] = 1;
          if (board[nx][ny] === 1) {
            // 벽을 부수는 과정
            board[nx][ny] = 0;
            deque.push([nx, ny, cnt + 1]);
          } else {
            // 0이라면 우선 순위가 높기 때문에(최소한의 벽을 부수기 위해) unshift로 넣어줌.
            deque.unshift([nx, ny, cnt]);
          }
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
    input.push(line.split("").map((v) => +v));
    if (input.length > input[0][2]) {
      console.log(sol(input));
      process.exit();
    }
  });
