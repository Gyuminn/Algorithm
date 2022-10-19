const sol = (board) => {
  const zeros = [];
  let temp = [];

  // 0인 좌표를 zeros 배열에 추가
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        zeros.push([i, j]);
      }
    }
  }

  // 행 검사
  const checkRow = (x, a) => {
    for (let i = 0; i < 9; i++) {
      if (a === board[x][i]) return false;
    }
    return true;
  };

  // 열 검사
  const checkCol = (y, a) => {
    for (let i = 0; i < 9; i++) {
      if (a === board[i][y]) return false;
    }
    return true;
  };

  // 작은 보드 검사
  const checkSmallBoard = (x, y, a) => {
    const startX = parseInt(x / 3) * 3;
    const startY = parseInt(y / 3) * 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (a === board[startX + i][startY + j]) {
          return false;
        }
      }
    }
    return true;
  };

  const dfs = (L) => {
    if (L === zeros.length) {
      console.log(board.map((row) => row.join(" ")).join(`\n`));
      process.exit();
    } else {
      for (let i = 1; i < 10; i++) {
        const [x, y] = zeros[L];

        if (checkRow(x, i) && checkCol(y, i) && checkSmallBoard(x, y, i)) {
          board[x][y] = i;
          dfs(L + 1);
          board[x][y] = 0;
        }
      }
    }
  };

  dfs(0);
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length === 9) {
      sol(input);
    }
  });
