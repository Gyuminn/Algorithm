const sol = (input) => {
  const [N, M] = input[0];
  const A = input.slice(1, N + 1);
  const B = input.slice(N + 1);

  const compareBoard = Array.from(Array(N), () => Array(M));

  // A와 B의 값이 같으면 0이고, 아니면 1인 board를 생성
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      A[i][j] === B[i][j] ? (compareBoard[i][j] = 0) : (compareBoard[i][j] = 1);
    }
  }

  // 둘이 같은 행렬이라면 0을 출력
  let flag = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (compareBoard[i][j] == 1) {
        flag = 1;
        break;
      }
    }
    if (flag) break;
  }

  if (!flag) {
    return 0;
  }

  // 3X3의 부분행렬이 나올 수 없는 경우 -1을 리턴.
  if (N < 3 || M < 3) return -1;

  const flipBoard = (si, sj) => {
    for (let i = si; i < si + 3; i++) {
      for (let j = sj; j < sj + 3; j++) {
        compareBoard[i][j] === 1
          ? (compareBoard[i][j] = 0)
          : (compareBoard[i][j] = 1);
      }
    }
  };

  let cnt = 0;

  for (let i = 0; i < N - 2; i++) {
    for (let j = 0; j < M - 2; j++) {
      if (compareBoard[i][j] === 0) continue;
      else {
        flipBoard(i, j);
        cnt++;
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (compareBoard[i][j] === 1) return -1;
    }
  }
  return cnt;
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
      input.push(line.split("").map((v) => +v));
    }

    if (input.length > input[0][0] * 2) {
      console.log(sol(input));
      process.exit();
    }
  });
