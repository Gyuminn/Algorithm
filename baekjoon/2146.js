const sol = (input) => {
  const [[N], ...board] = input;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let visited = Array.from(Array(N), () => Array(N).fill(0));
  let landNum = 0;

  function check(x, y) {
    return 0 <= x && x < N && 0 <= y && y < N;
  }

  function BFS_addLandNumber(sx, sy, landNum) {
    const queue = [];
    visited[sx][sy] = 1;
    board[sx][sy] = landNum;
    queue.push([sx, sy]);

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];

        if (check(nx, ny) && board[nx][ny] && !visited[nx][ny]) {
          visited[nx][ny] = 1;
          board[nx][ny] = landNum;
          queue.push([nx, ny]);
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] && !visited[i][j]) {
        landNum += 1;
        BFS_addLandNumber(i, j, landNum);
      }
    }
  }

  function BFS(landNum) {
    const queue = [];
    visited = Array.from(Array(N), () => Array(N).fill(0));

    // 같은 대륙에 있는 모든 땅들을 queue에 넣고 시작.
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++)
        if (board[i][j] == landNum) {
          visited[i][j] = 1;
          queue.push([i, j]);
        }
    }

    let cnt = 0;
    while (queue.length) {
      let qlen = queue.length;

      while (qlen--) {
        const [x, y] = queue.shift();

        for (let k = 0; k < 4; k++) {
          const [nx, ny] = [x + dx[k], y + dy[k]];

          // 지도를 벗어나는 경우
          if (!check(nx, ny)) continue;

          // 육지이고, 이동하기 전 대륙의 번호와 다른 번호라면 cnt 반환
          if (board[nx][ny] !== 0 && board[nx][ny] !== landNum) return cnt;

          // 바다라면 큐에 넣어주고 계속 진행
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
  for (let i = 1; i <= landNum; i++) {
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
