const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > Number(input[0][0])) {
    const width = Number(input[0][0]);
    const height = Number(input[0][1]);
    input.shift();
    solution(width, height, input);
    rl.close();
  }
};

const closeHandler = () => {
  process.exit();
};

const solution = (height, width, board) => {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      max = Math.max(
        max,
        check1(i, j, width, board),
        check2(i, j, height, board),
        check3(i, j, width, height, board),
        check4(i, j, width, height, board),
        check5(i, j, width, height, board),
        check6(i, j, width, height, board),
        check7(i, j, width, height, board),
        check8(i, j, width, height, board),
        check9(i, j, width, height, board),
        check10(i, j, width, height, board),
        check11(i, j, width, height, board),
        check12(i, j, width, height, board),
        check13(i, j, width, height, board),
        check14(i, j, width, height, board),
        check15(i, j, width, height, board),
        check16(i, j, width, height, board),
        check17(i, j, width, height, board),
        check18(i, j, width, height, board),
        check19(i, j, width, height, board)
      );
    }
  }
  console.log(max);
};

// ㅁㅁㅁㅁ
const check1 = (i, j, width, board) => {
  if (j + 3 < width) {
    return board[i][j] + board[i][j + 1] + board[i][j + 2] + board[i][j + 3];
  }
  return 0;
};

// ㅁ
// ㅁ
// ㅁ
// ㅁ
const check2 = (i, j, height, board) => {
  if (i + 3 < height) {
    return board[i][j] + board[i + 1][j] + board[i + 2][j] + board[i + 3][j];
  }

  return 0;
};

// ㅁ ㅁ
// ㅁ ㅁ
const check3 = (i, j, width, height, board) => {
  if (i + 1 < height && j + 1 < width) {
    return (
      board[i][j] + board[i][j + 1] + board[i + 1][j] + board[i + 1][j + 1]
    );
  }
  return 0;
};

// ㅁ
// ㅁ
// ㅁ ㅁ
const check4 = (i, j, width, height, board) => {
  if (i + 2 < height && j + 1 < width) {
    return (
      board[i][j] + board[i + 1][j] + board[i + 2][j] + board[i + 2][j + 1]
    );
  }
  return 0;
};

//   ㅁ
//   ㅁ
// ㅁ ㅁ
const check5 = (i, j, width, height, board) => {
  if (i + 2 < height && j + 1 < width) {
    return (
      board[i + 2][j] +
      board[i][j + 1] +
      board[i + 1][j + 1] +
      board[i + 2][j + 1]
    );
  }
  return 0;
};

// ㅁ ㅁ
// ㅁ
// ㅁ
const check6 = (i, j, width, height, board) => {
  if (i + 2 < height && j + 1 < width) {
    return board[i][j] + board[i][j + 1] + board[i + 1][j] + board[i + 2][j];
  }
  return 0;
};

// ㅁ ㅁ
//   ㅁ
//   ㅁ
const check7 = (i, j, width, height, board) => {
  if (i + 2 < height && j + 1 < width) {
    return (
      board[i][j] + board[i][j + 1] + board[i + 1][j + 1] + board[i + 2][j + 1]
    );
  }
  return 0;
};

// ㅁ
// ㅁ ㅁ
//    ㅁ
const check8 = (i, j, width, height, board) => {
  if (i + 2 < height && j + 1 < width) {
    return (
      board[i][j] + board[i + 1][j] + board[i + 1][j + 1] + board[i + 2][j + 1]
    );
  }
  return 0;
};

//   ㅁ
// ㅁ ㅁ
// ㅁ
const check9 = (i, j, width, height, board) => {
  if (i + 2 < height && j + 1 < width) {
    return (
      board[i][j + 1] + board[i + 1][j] + board[i + 1][j + 1] + board[i + 2][j]
    );
  }
  return 0;
};

// ㅁ ㅁ ㅁ
//   ㅁ
const check10 = (i, j, width, height, board) => {
  if (i + 1 < height && j + 2 < width) {
    return (
      board[i][j] + board[i][j + 1] + board[i][j + 2] + board[i + 1][j + 1]
    );
  }
  return 0;
};

//   ㅁ
// ㅁ ㅁ ㅁ
const check11 = (i, j, width, height, board) => {
  if (i + 1 < height && j + 2 < width) {
    return (
      board[i][j + 1] +
      board[i + 1][j] +
      board[i + 1][j + 1] +
      board[i + 1][j + 2]
    );
  }
  return 0;
};

//      ㅁ
// ㅁ ㅁ ㅁ
const check12 = (i, j, width, height, board) => {
  if (i + 1 < height && j + 2 < width) {
    return (
      board[i][j + 2] +
      board[i + 1][j] +
      board[i + 1][j + 1] +
      board[i + 1][j + 2]
    );
  }
  return 0;
};

// ㅁ
// ㅁ ㅁ ㅁ
const check13 = (i, j, width, height, board) => {
  if (i + 1 < height && j + 2 < width) {
    return (
      board[i][j] + board[i + 1][j] + board[i + 1][j + 1] + board[i + 1][j + 2]
    );
  }
  return 0;
};

// ㅁ ㅁ ㅁ
// ㅁ
const check14 = (i, j, width, height, board) => {
  if (i + 1 < height && j + 2 < width) {
    return board[i][j] + board[i][j + 1] + board[i][j + 2] + board[i + 1][j];
  }
  return 0;
};

// ㅁ ㅁ ㅁ
//      ㅁ
const check15 = (i, j, width, height, board) => {
  if (i + 1 < height && j + 2 < width) {
    return (
      board[i][j] + board[i][j + 1] + board[i][j + 2] + board[i + 1][j + 2]
    );
  }
  return 0;
};

//    ㅁ ㅁ
// ㅁ ㅁ
const check16 = (i, j, width, height, board) => {
  if (i + 1 < height && j + 2 < width) {
    return (
      board[i][j + 1] + board[i][j + 2] + board[i + 1][j] + board[i + 1][j + 1]
    );
  }
  return 0;
};

// ㅁ ㅁ
//    ㅁ ㅁ
const check17 = (i, j, width, height, board) => {
  if (i + 1 < height && j + 2 < width) {
    return (
      board[i][j] + board[i][j + 1] + board[i + 1][j + 1] + board[i + 1][j + 2]
    );
  }
  return 0;
};

// ㅁ
// ㅁ ㅁ
// ㅁ
const check18 = (i, j, width, height, board) => {
  if (i + 2 < height && j + 1 < width) {
    return (
      board[i][j] + board[i + 1][j] + board[i + 1][j + 1] + board[i + 2][j]
    );
  }
  return 0;
};

//    ㅁ
// ㅁ ㅁ
//    ㅁ
const check19 = (i, j, width, height, board) => {
  if (i + 2 < height && j + 1 < width) {
    return (
      board[i][j + 1] +
      board[i + 1][j] +
      board[i + 1][j + 1] +
      board[i + 2][j + 1]
    );
  }
  return 0;
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
