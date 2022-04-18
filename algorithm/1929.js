// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let primeNumbers = [];

// function lineHandler(line) {
//   let MIN = Number(line.split(" ")[0]);
//   const MAX = Number(line.split(" ")[1]);

//   while (MIN <= MAX) {
//     primeNum(MIN);
//     MIN++;
//   }
//   primeNumbers.forEach((primeNumber) => console.log(primeNumber));
//   rl.close();
// }

// function primeNum(num) {
//   if (num < 2) return;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return;
//   }

//   primeNumbers.push(num);
// }

// function closeHandler() {
//   process.exit();
// }

// rl.on("line", lineHandler);
// rl.on("close", closeHandler);

// ******************위의 방식은 시간 초과가 뜬다 *********************

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function lineHandler(line) {
  const [MIN, MAX] = line.split(" ").map((e) => Number(e));

  isPrime(MIN, MAX);
  rl.close();
}

function isPrime(min, max) {
  const primeArr = Array(max + 1).fill(true);
  primeArr[1] = false;

  // 2부터 n까지 n-1 개를 저장할 수 있는 배열 할당
  // 배열 참조 번호와 소수와 일치하도록 배열의 크기는 n+1 길이만큼 할당
  // 즉 인덱스 번호 0과 1은 사용하지 않는다. (밑에서 i가 2부터 시작)

  for (let i = 2; i <= Math.ceil(Math.sqrt(max)); i++) {
    // 제곱근까지만 검사해서 그 배수들만 지워주어도 충분하다.
    if (primeArr[i]) {
      // primeArr[i]가 true 라면 i 이후의 i 배수는 약수로 i를 가지고 있다.
      // 따라서 i 이후의 i 배수에 대해 false값을 준다.
      // primeArr[i]가 false 라면 i는 이미 소수가 아니므로 i의 배수 역시 소수가 아니다.
      // 따라서 검사할 필요가 없다.
      for (let j = i * i; j <= max; j += i) {
        primeArr[j] = false;
      }
    }
  }
  primeArr.forEach((element, index) => {
    if (index >= min && element === true) {
      console.log(index);
    }
  });
}

function closeHandler() {
  process.exit();
}
rl.on("line", lineHandler);
rl.on("close", closeHandler);
