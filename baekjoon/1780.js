const sol = (input) => {
  const [N, ...board] = input;

  let minusOneSum = 0;
  let zeroSum = 0;
  let plusOneSum = 0;

  const check = (row, col, length) => {
    // 첫 번쨰 원소
    const first = board[row][col];
    for (let i = row; i < row + length; i++) {
      for (let j = col; j < col + length; j++) {
        if (first !== board[i][j]) {
          return false;
        }
      }
    }

    return true;
  };

  // board를 9분할로 나누는 함수
  const divideBoard = (row, col, length) => {
    // 현재 단위 내의 모든 칸들의 값이 같을 경우
    if (check(row, col, length)) {
      switch (board[row][col]) {
        case -1:
          minusOneSum++;
          break;
        case 0:
          zeroSum++;
          break;
        case 1:
          plusOneSum++;
          break;
      }
    } else {
      // length을 3등분하여 분할 과정을 거친다.
      let size = length / 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          divideBoard(row + size * i, col + size * j, size);
        }
      }
    }
  };

  divideBoard(0, 0, N);
  let answer = [];
  answer.push(minusOneSum, zeroSum, plusOneSum);
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
      input.push(line.split(" ").map((v) => +v));

      if (input.length > input[0]) {
        console.log(sol(input));
        process.exit();
      }
    }
  });
