const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineHandler = (line) => {
  const n = Number(line);
  getMinSquareNumbers(n);
  rl.close();
};

const getMinSquareNumbers = (n) => {
  let DP = Array.from({ length: n + 1 }, () => Infinity);
  DP[0] = 0;
  DP[1] = 1;
  DP[2] = 2;
  DP[3] = 3;

  for (let i = 4; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      DP[i] = Math.min(DP[i], DP[i - j * j] + 1);
    }
  }
  console.log(DP[n]);
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
