const sol = (input) => {
  const [N] = input[0];
  const [r1, c1, r2, c2] = input[1];

  const visited = Array.from(Array(N), () => Array(N).fill(0));

  const dx = [-2, -2, 0, 0, 2, 2];
  const dy = [-1, 1, -2, 2, -1, 1];

  const bfs = () => {
    const queue = [];
    queue.push([r1, c1, 0]);

    while (queue.length) {
      const [x, y, cnt] = queue.shift();

      if (x == r2 && y == c2) return cnt;
      for (let k = 0; k < 6; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];

        if (nx < 0 || nx >= N || ny < 0 || ny >= N || visited[nx][ny]) continue;
        visited[nx][ny] = 1;
        queue.push([nx, ny, cnt + 1]);
      }
    }
  };
  return bfs() ?? -1;
};
const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));
    if (input.length == 2) {
      console.log(sol(input));
      process.exit();
    }
  });
