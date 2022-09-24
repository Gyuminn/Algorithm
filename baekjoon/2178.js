const sol = (input) => {
  const [[N, M], ...board] = input;

  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  let min = Number.MAX_SAFE_INTEGER;
  let cnt = 1;

  const DFS = (x, y) => {
    if (x === N - 1 && y === M - 1) {
      min = Math.min(min, cnt);
    } else {
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];

        if (
          nx >= 0 &&
          nx <= N - 1 &&
          ny >= 0 &&
          ny <= M - 1 &&
          board[nx][ny] === 1
        ) {
          board[nx][ny] = 0;
          cnt++;
          DFS(nx, ny);
          cnt--;
          board[nx][ny] = 1;
        }
      }
    }
  };

  board[0][0] = 0;
  DFS(0, 0);
  return min;
};

const input = [];

const lineHandler = (line) => {
  if (input.length === 0) {
    input.push(line.split(" ").map((v) => +v));
  } else {
    input.push(line.split("").map((v) => +v));
  }

  if (input.length > input[0][0]) {
    console.log(sol(input));
    process.exit();
  }
};
require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", lineHandler);
