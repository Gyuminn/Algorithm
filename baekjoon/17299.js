const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line.split(" "));

  if (input.length > 1) {
    const N = Number(input[0]);
    const A = input[1].map((v) => Number(v));

    getAnswer(N, A);
    rl.close();
  }
};

// 출연 빈도 구하기
const getCounts = (arr) => {
  const counts = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  return counts;
};

const getAnswer = (N, A) => {
  const countArr = getCounts(A);
  const stack = [];
  const answer = [];

  stack.push(0);
  for (let i = 1; i < N; i++) {
    while (
      stack.length &&
      countArr[A[i]] > countArr[A[stack[stack.length - 1]]]
    ) {
      answer[stack.pop()] = A[i];
    }
    stack.push(i);
  }

  while (stack.length) {
    answer[stack.pop()] = -1;
  }
  console.log(answer.join(" "));
};
const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
