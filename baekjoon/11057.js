const sol = (N) => {
  const dp = Array.from(Array(N + 1), () => Array(10));
  const mod = 10007;
  for (let i = 0; i < 10; i++) {
    dp[1][i] = 1;
  }

  for (let i = 2; i <= N; i++) {
    for (let j = 0; j < 10; j++) {
      if (j === 0) {
        dp[i][0] = 1;
        continue;
      }
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      dp[i][j] %= mod;
    }
  }
  return dp[N].reduce((acc, cur) => acc + cur) % mod;
};

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    console.log(sol(+line));
    process.exit();
  });
