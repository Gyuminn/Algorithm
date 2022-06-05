const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line.split(" "));

  if (input.length > Number(input[0][1]) + 1) {
    getSum();
    rl.close();
  }
};

const getSum = () => {
  const arr = input[1].map((v) => +v);
  const curSum = new Array(arr.length + 1).fill(0);
  const result = [];

  arr.forEach((v, i) => {
    curSum[i + 1] = curSum[i] + v;
  });

  input.slice(2).forEach((ij) => {
    const [i, j] = ij.map((v) => +v);
    result.push(curSum[j] - curSum[i - 1]);
  });

  console.log(result.join("\n"));
};

const closeHandler = () => {
  process.exit();
};

rl.on("line", lineHandler);
rl.on("close", closeHandler);
