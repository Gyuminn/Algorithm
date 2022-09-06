const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const lineHandler = (line) => {
  if (input.length === 0) {
    input.push(Number(line));
  } else {
    input.push(line.split(" ").map((v) => +v));
    input.shift();
    const arr = input[0].sort((a, b) => a - b);

    console.log(arr);
    process.exit();
  }
};

rl.on("line", lineHandler);
