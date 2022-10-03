const sol = (input) => {
  const [[N, M], ...board] = input;
  const visited = Array.from(Array(N), () => Array(M).fill(0));

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let answer = "No";

  const DFS = (x, y, num, sx, sy) => {
    visited[x][y] = 1;

    for (let k = 0; k < 4; k++) {
      const [nx, ny] = [x + dx[k], y + dy[k]];
      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < M &&
        board[nx][ny] === board[x][y] &&
        visited[nx][ny] === 0
      ) {
        DFS(nx, ny, num + 1, sx, sy);
      } else if (nx === sx && ny === sy && num >= 4) {
        answer = "Yes";
        return;
      }
    }
    visited[x][y] = 0;
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (visited[i][j] === 0) {
        DFS(i, j, 1, i, j);
        visited[i][j] = 1;
      }
    }
  }

  return answer;
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
      input.push(line.split(""));
    }

    if (input.length > input[0][0]) {
      console.log(sol(input));
      process.exit();
    }
  });
