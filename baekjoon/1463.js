const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineHandler = (line) => {
  const n = Number(line);

  const DP = new Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    // 1을 뺀 경우의 최솟값
    DP[i] = DP[i - 1] + 1;

    // 2로 나눴을 경우의 최솟값
    if (i % 2 === 0) {
      DP[i] = Math.min(DP[i], DP[i / 2] + 1);
    }

    if (i % 3 === 0) {
      // 3으로 나눴을 경우의 최솟값.
      DP[i] = Math.min(DP[i], DP[i / 3] + 1);
    }
  }

  console.log(DP[n]);
  rl.close();
};

const closeHandler = () => {
  process.exit();
};

rl.on("line", lineHandler);
rl.on("close", closeHandler);
