const sol = (input) => {
  const dp = Array.from({ length: input + 1 }, () => 0);
  dp[0] = 1;
  dp[1] = 0;
  dp[2] = 3;

  for (let i = 4; i <= input; i += 2) {
    dp[i] = dp[i - 2] * dp[2];
    for (let j = i - 4; j >= 0; j -= 2) {
      dp[i] += 2 * dp[j];
    }
  }
  return dp[input];
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
