const sol = (input) => {
  const [[N, M], ...board] = input;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const queue = [];
  const dis = Array.from(Array(N), () => Array(M).fill(0));

  board[0][0] = 1;
  dis[0][0] = 1;
  queue.push([0, 0]);
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let k = 0; k < 4; k++) {
      const [nx, ny] = [x + dx[k], y + dy[k]];
      if (nx >= 0 && nx < N && ny >= 0 && ny < M && board[nx][ny] === 1) {
        board[nx][ny] = 0;
        dis[nx][ny] = dis[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  return dis[N - 1][M - 1];
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
