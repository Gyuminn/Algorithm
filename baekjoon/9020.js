const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function lineHandler(line) {
  input.push(line);
  const testNum = Number(input[0]);

  if (input.length > testNum) {
    rl.close();
  }
}

function closeHandler() {
  for (let i = 1; i < input.length; i++) {
    isPrime(Number(input[i]));
  }
  process.exit();
}

function isPrime(num) {
  const primeArr = Array(num + 1).fill(true);
  primeArr[0] = false;
  primeArr[1] = false;

  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (primeArr[i]) {
      for (let j = i * i; j <= num; j += i) {
        primeArr[j] = false;
      }
    }
  }
  const result = [];
  primeArr.forEach((element, idx) => {
    if (element === true) {
      result.push(idx);
    }
  });
  Goldbach(num, result);
}

function Goldbach(testNum, primeNumArr) {
  let pairs = [];
  // 골드바흐의 추측 검사.
  if (testNum % 2 !== 0) return;
  // 짝수만 허용.

  for (let i = 0; i < primeNumArr.length; i++) {
    for (let j = i + 1; j < primeNumArr.length; j++) {
      if (primeNumArr[i] + primeNumArr[j] === testNum) {
        pairs.push([primeNumArr[i], primeNumArr[j]]);
      } else if (primeNumArr[i] * 2 === testNum) {
        pairs.push([primeNumArr[i], primeNumArr[i]]);
        break;
      }
    }
  }
  console.log(pairs[pairs.length - 1].join(" "));
}
rl.on("line", lineHandler);
rl.on("close", closeHandler);
