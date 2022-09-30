const sol = (input) => {
  const [[M, _, N], ...board] = input;

  const BFS = (sx, sy) => {
    const visited = Array.from(Array(N), () => Array(M).fill(0));
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    const deque = [];
    deque.push([sx, sy, 0]);
    visited[sx][sy] = 1;

    while (deque.length) {
      const [x, y, cnt] = deque.shift();
      if (x === N - 1 && y === M - 1) return cnt;

      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];
        // 아래와 같은 방식으로 풀면 visited[nx][nx] 에서 -1을 참조하기 때문에
        // 런타임 에러가 발생한다...
        if (nx >= 0 && ny >= 0 && nx < N && ny < M && visited[nx][ny] === 0) {
          visited[nx][ny] = 1;
          if (board[nx][ny] === 1) {
            board[nx][ny] = 0;
            deque.push([nx, ny, cnt + 1]);
          } else {
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
