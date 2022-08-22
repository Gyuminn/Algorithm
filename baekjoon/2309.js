const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const lineHandler = (line) => {
  input.push(Number(line));

  if (input.length > 8) {
    solution(input);
    rl.close();
  }
};

const solution = (arr) => {
  const answer = arr;
  const sum = arr.reduce((acc, cur) => acc + cur);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        console.log(answer.sort((a, b) => a - b).join(`\n`));
        return;
      }
    }
  }
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
