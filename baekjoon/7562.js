const sol = (testCase) => {
  const I = testCase[0][0];
  const [sx, sy] = testCase[1];
  const [ex, ey] = testCase[2];

  const board = Array.from(Array(I), () => Array(I).fill(0));

  const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
  const dy = [1, 2, 2, 1, -1, -2, -2, -1];

  let time = 0;

  const BFS = (x, y, time) => {
    const queue = [];
    queue.push([x, y, time]);
    board[x][y] = 1;

    while (queue.length) {
      const [x, y, time] = queue.shift();

      if (x === ex && y === ey) return time;

      for (let k = 0; k < 8; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];

        if (nx >= 0 && nx < I && ny >= 0 && ny < I && board[nx][ny] === 0) {
          board[nx][ny] = 1;
          queue.push([nx, ny, time + 1]);
        }
      }
    }
  };

  return BFS(sx, sy, time);
};
const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length > input[0][0] * 3) {
      input.shift();

      while (input.length) {
        const testCase = input.splice(0, 3);
        console.log(sol(testCase));
      }

      process.exit();
    }
  });
