const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let input = [];
let primeNum = 0;

function lineHandler(line) {
  count++;
  input.push(line);
  if (count >= 2) {
    rl.close();
  }
}

function closeHandler() {
  const total = Number(input[0]);
  const numbers = input[1].split(" ");

  for (let i = 0; i < total; i++) {
    primeNumHandler(numbers[i]);
  }
  console.log(primeNum);
  process.exit();
}

function primeNumHandler(num) {
  if (num < 2) return;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return;
  }
  // 위의 조건이 모두 아니라면
  primeNum++;
}

rl.on("line", lineHandler);
rl.on("close", closeHandler);
