const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function lineHandler(line) {
  const input = Number(line);
  console.log(factorial(input));

  rl.close();
}

function factorial(num) {
  if (num === 0) return 1;

  if (num < 2) return num;

  return num * factorial(num - 1);
}

function closeHandler() {
  process.exit();
}

rl.on("line", lineHandler);
rl.on("close", closeHandler);
