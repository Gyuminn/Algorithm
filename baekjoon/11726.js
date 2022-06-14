const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineHandler = (line) => {
  const n = Number(line);
  getNumCase(n);
  rl.close();
};

const getNumCase = (num) => {
  const memo = {
    1: 1,
    2: 2,
  };

  for (let i = 3; i <= num; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 10007;
  }
  console.log(memo[num]);
};
const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
