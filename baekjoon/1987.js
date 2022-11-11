const sol = (input) => {
  const [[R, C], ...board] = input;

  const set = new Set();
  set.add(board[0][0]);

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let max = Number.MIN_SAFE_INTEGER;

  const dfs = (sum, x, y) => {
    max = Math.max(max, sum);
    for (let k = 0; k < 4; k++) {
      const [nx, ny] = [x + dx[k], y + dy[k]];
      if (nx >= 0 && nx < R && ny >= 0 && ny < C && !set.has(board[nx][ny])) {
        set.add(board[nx][ny]);
        dfs(sum + 1, nx, ny);
        set.delete(board[nx][ny]);
      }
    }
  };

  dfs(1, 0, 0);
  return max;
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
      input.push(line.split(""));
    }

    if (input.length > input[0][0]) {
      console.log(sol(input));
      process.exit();
    }
  });
