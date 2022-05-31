const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function lineHandler(line) {
  const input = Number(line);
  if (input === 1) rl.close();
  primeFactorization(input);
  rl.close();
}

function primeFactorization(num) {
  let divider = 2;
  while (divider <= num) {
    if (num % divider === 0) {
      console.log(divider);
      num /= divider;
    } else {
      divider++;
    }
  }
}

function closeHandler() {
  process.exit();
}
rl.on("line", lineHandler);
rl.on("close", closeHandler);
