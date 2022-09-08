const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > 2) {
    const dist = input[1];
    const cost = input[2];

    console.log(dist, cost);
    process.exit();
  }
};
rl.on("line", lineHandler);
