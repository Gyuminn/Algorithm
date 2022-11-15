// 바이러스가 있는 곳의 위치를 저장
// DFS로 벽을 3개 세우는 경우를 모두 탐색
// 바이러스가 있는 곳으로부터 인접하고, 벽이 아닌 곳을 모두 바이러스로 변환
// 0의 개수를 탐색하여 max값 갱신

const sol = (input) => {
  const [[N, M], ...board] = input;

  const viruses = [];
  const zeros = [];

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let answer = 0;

  // 바이러스가 있는 곳의 위치를 저장
  // 0인 곳(빈 칸)의 위치를 저장
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] == 0) {
        zeros.push([i, j]);
      } else if (board[i][j] == 2) {
        viruses.push([i, j]);
      }
    }
  }

  const bfs = (copyBoard) => {
    const queue = [];
    viruses.forEach((virus) => {
      const [sx, sy] = virus;
      queue.push([sx, sy]);
    });

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];

        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

        if (copyBoard[nx][ny] == 0) {
          copyBoard[nx][ny] = 2;
          queue.push([nx, ny]);
        }
      }
    }

    // 0의 개수 찾기
    let cntZero = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (copyBoard[i][j] == 0) {
          cntZero++;
        }
      }
    }

    return cntZero;
  };

  const dfs = (L, S) => {
    if (L == 3) {
      const copyBoard = board.map((v) => [...v]);
      const numZeros = bfs(copyBoard);
      answer = Math.max(answer, numZeros);

      return;
    } else {
      for (let i = S; i < zeros.length; i++) {
        const [x, y] = zeros[i];
        board[x][y] = 1;
        dfs(L + 1, i + 1);
        board[x][y] = 0;
      }
    }
  };

  dfs(0, 0);
  return answer;
};

// 백준에서 입력받기
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
