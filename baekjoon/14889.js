const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > input[0][0]) {
    const [[N], ...S] = input;

    console.log(N, S);
    process.exit();
  }
};
rl.on("line", lineHandler);
