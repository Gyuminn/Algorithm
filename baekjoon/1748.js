const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineHandler = (line) => {
  const n = Number(line);
  solution(n);
  rl.close();
};

const solution = (n) => {
  let answer = 0;
  for (let i = 1; i <= n; i *= 10) {
    answer += n - i + 1;
  }
  console.log(answer);
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
