const sol = (N) => {
  const dp = Array.from(Array(N + 1), () => Array(3));
  const mod = 9901;

  dp[1][0] = 1;
  dp[1][1] = 1;
  dp[1][2] = 1;

  for (let i = 2; i <= N; i++) {
    dp[i][0] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % mod;
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % mod;
    dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % mod;
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
