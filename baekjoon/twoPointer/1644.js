const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineHandler = (line) => {
  const N = Number(line);
  const primeArrUnderNum = getPrimeNumsUnderNum(2, N);
  let lastIdx = primeArrUnderNum.length - 1;
  let lt = 0;
  let rt = 0;
  let sum = primeArrUnderNum[lt];
  let answer = 0;

  while (lt <= lastIdx) {
    if (sum < N) {
      if (rt === lastIdx) {
        break;
      }
      rt++;
      sum += primeArrUnderNum[rt];
    } else {
      if (sum === N) {
        answer += 1;
      }
      sum -= primeArrUnderNum[lt++];
    }
  }
  console.log(answer);
  process.exit();
};

// min ~ max 사이의 소수 배열 구하기
const getPrimeNumsUnderNum = (min, max) => {
  const primeArr = Array.from({ length: max + 1 }, (v, i) => i);
  primeArr[0] = primeArr[1] = false;

  for (let i = 2; i <= Math.ceil(Math.sqrt(max)); i++) {
    if (primeArr[i]) {
      for (let j = i * i; j <= max; j += i) {
        primeArr[j] = false;
      }
    }
  }

  return primeArr.filter((prime, idx) => idx >= min && prime);
};
rl.on("line", lineHandler);
