const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function lineHandler(line) {
  const input = Number(line);
  console.log(fibonacchi(input));

  rl.close();
}

function fibonacchi(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;

  return fibonacchi(num - 2) + fibonacchi(num - 1);
}

function closeHandler() {
  process.exit();
}
rl.on("line", lineHandler);
rl.on("close", closeHandler);
