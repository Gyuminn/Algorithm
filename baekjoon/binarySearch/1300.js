const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(Number(line));

  if (input.length > 1) {
    const [N, k] = input;
    const A = Array.from({ length: N }, () => new Array(N));

    // 행렬을 만들지 않고 이분탐색으로 풀 수  있다.
    // 다른 사람의 풀이를 확인했지만 아직 내 수준에서 떠올리기 힘들다.
    // 추후에 다시 풀어볼 것.
    process.exit();
  }
};

rl.on("line", lineHandler);
