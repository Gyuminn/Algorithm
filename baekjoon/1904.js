const sol = (num) => {
  const dp = Array.from({ length: num + 1 });

  dp[1] = 1;
  dp[2] = 2;
  // dp[3] = 3; // 00+1 1+00 1+1+1
  // dp[4] = 5; // 00+00 00+1+1 1+00+1 1+1+00 1+1+1+1
  // dp[5] = 8;

  for (let i = 3; i <= num; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 15746;
  }
  return dp[num];
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
