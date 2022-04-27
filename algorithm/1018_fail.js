const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const createArray = (row, column, str) => {
  let arr = new Array(row).fill(str);
  for (let i = 0; i < row; i++) {
    arr[i] = new Array(column).fill(str);
  }
  return arr;
};

// 검정으로 시작하거나, 하얀색으로 시작하는 체스판 만들기
const initWithColor = (color) => {
  const arrChess = createArray(8, 8, color);

  for (let i = 0; i <= 6; i++) {
    for (let j = 0; j <= 6; j++) {
      if (arrChess[i][j] === "B") {
        arrChess[i][j + 1] = "W";
        arrChess[i + 1][j] = "W";
      } else {
        arrChess[i][j + 1] = "B";
        arrChess[i + 1][j] = "B";
      }
    }
  }
  return arrChess;
};

let input = [];
let answers = [];

const lineHandler = (line) => {
  if (input.length === 0) {
    input.push(line.split(" "));
  } else {
    input.push(line.split(""));
  }

  if (input.length > Number(input[0][1])) {
    compareChess();
    rl.close();
  }
};

const compareChess = () => {
  const height = Number(input[0][0]);
  const width = Number(input[0][1]);
  const boardAll = input.slice(1);

  const chessBlack = initWithColor("B").join().split(",");
  const chessWhite = initWithColor("W").join().split(",");

  for (let i = 0; i <= height - 8; i++) {
    for (let j = 0; j <= width - 8; j++) {
      let board = boardAll.slice(i, 8 + i);
      for (let k = 0; k <= 7; k++) {
        board[k] = board[k].slice(j, 8 + j);
      }

      for (let l = 0; l < 64; l++) {
        let countBlack = 0;
        let countWhite = 0;
        const testArr = board.join().split(",");
        if (testArr[l] !== chessBlack[l]) {
          countBlack++;
        } else if (testArr[l] !== chessWhite[l]) {
          countWhite++;
        }
        answers.push(countBlack);
        answers.push(countWhite);
      }
      console.table(board);
    }
  }
  console.log(answers.sort((a, b) => a - b)[0]);
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
