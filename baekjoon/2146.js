const sol = (input) => {
  const [[N], ...board] = input;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let visited = Array.from(Array(N), () => Array(N).fill(0));
  let isLandCnt = 0;

  function check(x, y) {
    return 0 <= x && x < N && 0 <= y && y < N;
  }

  function BFS_addLandNumber(sx, sy, isLandCnt) {
    const queue = [];
    visited[sx][sy] = 1;
    board[sx][sy] = isLandCnt;
    queue.push([sx, sy]);

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];

        if (check(nx, ny) && board[nx][ny] && !visited[nx][ny]) {
          visited[nx][ny] = 1;
          board[nx][ny] = isLandCnt;
          queue.push([nx, ny]);
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] && !visited[i][j]) {
        isLandCnt += 1;
        BFS_addLandNumber(i, j, isLandCnt);
      }
    }
  }

  function BFS(isLandCnt) {
    const queue = [];
    visited = Array.from(Array(N), () => Array(N).fill(0));

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++)
        if (board[i][j] == isLandCnt) {
          visited[i][j] = 1;
          queue.push([i, j]);
        }
    }

    let cnt = 0;
    while (queue.length) {
      let qlen = queue.length;

      while (qlen--) {
        let cur = queue.shift();
        let x = cur[0];
        let y = cur[1];

        for (let i = 0; i < 4; i++) {
          let nx = x + dx[i];
          let ny = y + dy[i];

          if (!check(nx, ny)) continue;
          if (board[nx][ny] !== 0 && board[nx][ny] !== isLandCnt) return cnt;
          if (board[nx][ny] === 0 && !visited[nx][ny]) {
            visited[nx][ny] = 1;
            queue.push([nx, ny]);
          }
        }
      }
      cnt++;
    }
  }

  let ans = Infinity;
  for (let i = 1; i <= isLandCnt; i++) {
    ans = Math.min(ans, BFS(i));
  }

  return ans;
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length > input[0][0]) {
      console.log(sol(input));
      process.exit();
    }
  });
