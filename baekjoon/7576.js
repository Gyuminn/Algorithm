const sol = (input) => {
  const [[M, N], ...board] = input;

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const queue = [];
  let ripeDay = 0;

  // 익은 토마토(1)를 찾아서 queue에 넣어준다.
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 1) {
        queue.push([i, j]);
      }
    }
  }

  const BFS = () => {
    while (queue.length) {
      const [x, y] = queue.shift();

      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];

        // 지도를 벗어나지 않고 익지않은 토마토(0)라면
        if (nx >= 0 && nx < N && ny >= 0 && ny < M && board[nx][ny] === 0) {
          board[nx][ny] = board[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  };

  // BFS를 통해 탐색
  BFS();

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // 익지 않은 토마토가 존재할 경우
      if (board[i][j] == 0) {
        return -1;
      }

      if (ripeDay < board[i][j]) {
        ripeDay = board[i][j];
      }
    }
  }
  return ripeDay - 1;
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length > input[0][1]) {
      console.log(sol(input));
      process.exit();
    }
  });
