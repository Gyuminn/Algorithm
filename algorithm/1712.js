const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function lineHandler(line) {
  const input = line.split(" ");

  const costFix = Number(input[0]);
  const costVar = Number(input[1]);
  const price = Number(input[2]);

  const breackEvenPoint = Math.floor(costFix / (price - costVar)) + 1;

  costVar >= price ? console.log(-1) : console.log(breackEvenPoint);
  rl.close();
}

function closeHandler() {
  process.exit();
}

rl.on("line", lineHandler);
rl.on("close", closeHandler);
