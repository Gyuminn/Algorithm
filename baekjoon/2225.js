const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineHandler = (line) => {
  const [n, k] = line.split(" ").map((v) => +v);
  getSumDivide(n, k);
  rl.close();
};

const getSumDivide = (n, k) => {
  const DP = Array.from({ length: k + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= n; i++) {
    DP[1][i] = BigInt(1);
  }
  for (let i = 0; i <= k; i++) {
    DP[i][0] = BigInt(1);
  }

  for (let i = 2; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      DP[i][j] = BigInt(DP[i - 1][j]) + BigInt(DP[i][j - 1]);
    }
  }
  console.log((DP[k][n] % BigInt(1000000000)).toString());
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
