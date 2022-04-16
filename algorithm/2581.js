const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let primeNumbers = [];

function lineHandler(line) {
  input.push(line);

  if (input.length >= 2) {
    rl.close();
  }
}

function closeHandler() {
  const MIN = Number(input[0]);
  const MAX = Number(input[1]);

  testHandler(MIN, MAX);
  if (primeNumbers.length === 0) {
    return console.log(-1);
  } else {
    const initialValue = 0;
    const sumWithInitial = primeNumbers.reduce(
      (prev, cur) => prev + cur,
      initialValue
    );
    // for문이 아닌 reduce를 이용하여(초기값 0으로 제공) 배열의 핪 구하기
    const minPrimeNum = Math.min(...primeNumbers);
    // primeNumbers의 첫 번째 값이 최소값이긴 하지만 그래도 최소값을 구하는 방법을 적용해 봄.
    console.log(sumWithInitial);
    console.log(minPrimeNum);
  }

  process.exit();
}

function testHandler(min, max) {
  while (min <= max) {
    primeNumHandler(min);
    min++;
  }
}

function primeNumHandler(num) {
  if (num < 2) return;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return;
  }
  //위의 조건이 모두 아니라면
  primeNumbers.push(num);
}

rl.on("line", lineHandler);
rl.on("close", closeHandler);
