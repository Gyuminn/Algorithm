const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function lineHandler(line) {
  input.push(Number(line));

  if (input[input.length - 1] == 0) {
    rl.close();
  }
}

function closeHandler() {
  for (let i = 0; i < input.length - 1; i++) {
    isPrime(input[i], 2 * input[i]);
  }

  process.exit();
}

function isPrime(min, max) {
  const primeArr = Array(max + 1).fill(true);
  primeArr[0] = false;
  primeArr[1] = false;

  for (let i = 2; i <= Math.ceil(Math.sqrt(max)); i++) {
    if (primeArr[i]) {
      for (let j = i * i; j <= max; j += i) {
        primeArr[j] = false;
      }
    }
  }
  const result = primeArr.slice(min + 1).filter((element) => element === true);
  // min 보다 크고 max 보다 같거나 작은 배열만 만든 후, true인 것들만 모아주어 새롭게 반환한다.
  console.log(result.length);
}

rl.on("line", lineHandler);
rl.on("close", closeHandler);
