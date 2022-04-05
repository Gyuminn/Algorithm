const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let count = 0;

function lineHandler(line) {
  count++;
  input.push(line);
  const number = Number(input[0]);

  if (count === number + 1) {
    rl.close();
  }
}

function closeHandler() {
  for (let i = 1; i < count; i++) {
    const strArray = input[i].split("");
  }

  process.exit();
}

rl.on("line", lineHandler);
rl.on("close", closeHandler);
