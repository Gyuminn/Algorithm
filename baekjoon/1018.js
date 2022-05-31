const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const initWithColor = (str) => {
  let arr = new Array(8);

  for (let i = 0; i < arr.length; i += 2) {
    if (str === "B") {
      arr[i] = "BWBWBWBW";
    } else if (str === "W") {
      arr[i] = "WBWBWBWB";
    }
  }

  for (let i = 1; i < arr.length; i += 2) {
    if (str === "B") {
      arr[i] = "WBWBWBWB";
    } else if (str === "W") {
      arr[i] = "BWBWBWBW";
    }
  }
  return arr;
};

const compareWithColor = (inputArr, y, x, color) => {
  let count = 0;
  const chessBoard = initWithColor(color);
  for (let i = y; i <= y + 7; i++) {
    for (let j = x; j <= x + 7; j++) {
      if (inputArr[i][j] !== chessBoard[i - y][j - x]) count++;
    }
  }
  return count;
};

const comparison = (inputArr, height, width) => {
  let answers = [];
  for (let i = 0; i <= height - 8; i++) {
    for (let j = 0; j <= width - 8; j++) {
      answers.push(compareWithColor(inputArr, i, j, "B"));
      answers.push(compareWithColor(inputArr, i, j, "W"));
    }
  }
  console.log(answers.sort((a, b) => a - b)[0]);
};

const lineHandler = (line) => {
  if (input.length === 0) {
    input.push(line.split(" "));
  } else {
    input.push(line);
  }

  if (input.length > Number(input[0][0])) {
    const height = Number(input[0][0]);
    const width = Number(input[0][1]);
    comparison(input.slice(1), height, width);
    rl.close();
  }
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
