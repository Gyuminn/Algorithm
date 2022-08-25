const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > input[0][0]) {
    const n = input[0][0];
    input.shift();
    solution(n, input);
    rl.close();
  }
};

const solution = (n, arr) => {
  let answer = [];
  for (let i = 0; i < n; i++) {
    const [M, N, X, Y] = arr[i];
    const lastYear = getLCM(M, N);

    let x = X;
    let y = Y;

    while (1) {
      if (x > lastYear || y > lastYear) {
        answer.push(-1);
        break;
      } else if (x > y) {
        y += N;
      } else if (x < y) {
        x += M;
      } else {
        answer.push(x);
        break;
      }
    }
  }
  console.log(answer.join(`\n`));
};

// 최대 공약수 구하기
// 유클리드 호제법으로부터의 재귀함수
const getGCD = (a, b) => {
  if (b === 0) return a;
  return a > b ? getGCD(b, a % b) : getGCD(a, b % a);
};

//최소 공배수 구하기
const getLCM = (a, b) => {
  return (a * b) / getGCD(a, b);
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
