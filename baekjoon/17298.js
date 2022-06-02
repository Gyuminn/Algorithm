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
  const stack = [];

  for (let i = 0; i < N; i++) {
    while (stack.length && Number(A[i]) > Number(A[stack[stack.length - 1]])) {
      A[stack.pop()] = A[i];
    }
    stack.push(i);
  }

  while (stack.length) {
    A[stack.pop()] = -1;
  }
  console.log(A.join(" ").trim());
};
const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
