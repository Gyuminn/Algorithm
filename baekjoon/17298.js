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
    const A = input[1].map((element) => Number(element));

    getNGE(N, A);
    rl.close();
  }
};

const getNGE = (N, A) => {
  // stack은 원소의 인덱스를 넣어주는 목적으로 사용
  const stack = [];
  const answer = [];

  // 처음 스택에는 0이 들어가있다.
  stack.push(0);
  for (let i = 1; i < N; i++) {
    while (stack.length && A[i] > A[stack[stack.length - 1]]) {
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
