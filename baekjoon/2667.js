const sol = (input) => {
  const [N, ...board] = input;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const answer = [];
  let group = 0;
  let home = 0;

  //   const DFS = (x, y) => {
  //     home++;
  //     board[x][y] = 0;

  //     for (let k = 0; k < 4; k++) {
  //       const [nx, ny] = [x + dx[k], y + dy[k]];
  //       if (nx >= 0 && nx < N && ny >= 0 && ny < N && board[nx][ny] === 1) {
  //         DFS(nx, ny);
  //       }
  //     }
  //   };

  const BFS = (x, y) => {
    const queue = [];
    board[x][y] = 0;
    queue.push([x, y]);
    home++;

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];
        if (nx >= 0 && nx < N && ny >= 0 && ny < N && board[nx][ny] === 1) {
          board[nx][ny] = 0;
          queue.push([nx, ny]);
          home++;
        }
      }
    }
  };

  //   for (let i = 0; i < N; i++) {
  //     for (let j = 0; j < N; j++) {
  //       if (board[i][j] === 1) {
  //         group++;
  //         DFS(i, j);
  //         // 한 단지의 순회가 마무리 되었을 때 아파트 수를 넣고 home 초기화
  //         answer.push(home);
  //         home = 0;
  //       }
  //     }
  //   }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === 1) {
        group++;
        BFS(i, j);
        answer.push(home);
        home = 0;
      }
    }
  }
  answer.sort((a, b) => a - b);
  answer.unshift(group);
  return answer.join(`\n`);
};
const input = [];
require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    if (input.length === 0) {
      input.push(+line);
    } else {
      input.push(line.split("").map((v) => +v));
    }

    if (input.length > input[0]) {
      console.log(sol(input));
      process.exit();
    }
  });
