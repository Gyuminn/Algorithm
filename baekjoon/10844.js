const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const mod = 1000000000;

const lineHandler = (line) => {
  const N = Number(line);
  getEasyStairNumber(N);
  rl.close();
};

const getEasyStairNumber = (n) => {
  const DP = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
  let sum = 0;

  for (let i = 0; i < 10; i++) {
    if (i === 0) {
      DP[1][0] = 0;
    } else {
      DP[1][i] = 1;
    }
  }

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < 10; j++) {
      if (j === 0) {
        DP[i][j] = DP[i - 1][j + 1] % mod;
      } else if (j === 9) {
        DP[i][j] = DP[i - 1][j - 1] % mod;
      } else {
        DP[i][j] = (DP[i - 1][j - 1] + DP[i - 1][j + 1]) % mod;
      }
    }
  }

  for (let i = 0; i < 10; i++) {
    sum += DP[n][i];
  }
  console.log(sum % mod);
};

const closeHandler = () => {
  process.exit();
};

rl.on("line", lineHandler);
rl.on("close", closeHandler);
