const sol = (num) => {
  let board = Array.from({ length: num });
  let cnt = 0;
  const check = (cdx) => {
    // 이 전의 행에 있던 값들과 같은 열이면 안되고, 대각선도 안된다.
    for (let i = 0; i < cdx; i++) {
      if (
        board[cdx] === board[i] ||
        cdx - i === Math.abs(board[cdx] - board[i])
      ) {
        return 0;
      }
    }

    return 1;
  };

  const nqueen = (cdx) => {
    if (cdx === num) {
      cnt++;
      return;
    }

    for (let i = 0; i < num; i++) {
      // dx 번째 행, i 번째 열에 queen을 놓아본다.
      board[cdx] = i;

      // 자리에 놓아도 괜찮다면
      if (check(cdx)) {
        // 재귀 진행
        nqueen(cdx + 1);
      }
    }
  };

  nqueen(0);
  return cnt;
};

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    console.log(sol(+line));
    process.exit();
  });
