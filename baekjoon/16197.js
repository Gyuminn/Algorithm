const sol = (input) => {
  const [[N, M], ...board] = input;

  const dx = [-1, 0, 1, -1];
  const dy = [0, 1, 0, -1];

  const coinStart = [];

  let answer = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] == "o") {
        coinStart.push([i, j]);
      }
    }
  }

  const rangeOver = (x, y) => {
    if (x < 0 || y < 0 || x >= N || y >= M) {
      return true;
    }
    return false;
  };

  const move = (x1, y1, x2, y2, cnt, dir) => {
    if (answer < cnt) return;

    if (cnt > 10) {
      answer = Math.min(answer, cnt);
      return;
    }

    let [nx1, ny1, nx2, ny2] = [
      x1 + dx[dir],
      y1 + dy[dir],
      x2 + dx[dir],
      y2 + dy[dir],
    ];

    let isCoin1RangeOver = rangeOver(nx1, ny1);
    let isCoin2RangeOver = rangeOver(nx2, ny2);

    if (isCoin1RangeOver && isCoin2RangeOver) {
      return;
    } else if (isCoin1RangeOver && !isCoin2RangeOver) {
      answer = Math.min(answer, cnt);
      return;
    } else if (!isCoin1RangeOver && isCoin2RangeOver) {
      answer = Math.min(answer, cnt);
      return;
    }

    if (board[nx1][ny1] == "#") {
      nx1 = x1;
      ny1 = y1;
    }

    if (board[nx2][ny2] == "#") {
      nx2 = x2;
      ny2 = y2;
    }

    for (let k = 0; k < 4; k++) {
      move(nx1, ny1, nx2, ny2, cnt + 1, k);
    }
  };

  for (let i = 0; i < 4; i++) {
    const [[x1, y1], [x2, y2]] = coinStart;
    move(x1, y1, x2, y2, 1, i);
  }

  if (answer > 10) answer = -1;
  return answer;
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
