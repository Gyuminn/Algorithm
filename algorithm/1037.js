const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line.split(" "));

  if (input.length > 1) {
    getNum(input[[1]]);
    rl.close();
  }
};

const getNum = (arr) => {
  arr.sort((a, b) => a - b);
  console.log(arr[0] * arr[arr.length - 1]);
};

const closeHandler = () => {
  process.exit();
};

rl.on("line", lineHandler);
rl.on("close", closeHandler);
