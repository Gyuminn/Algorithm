const sol = (input) => {
  const [N, ...stairs] = input;

  const dp = Array.from({ length: N }, () => 0);
  dp[0] = stairs[0];
  dp[1] = Math.max(stairs[0] + stairs[1], stairs[1]);
  dp[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]);

  for (let i = 3; i < N; i++) {
    dp[i] = Math.max(
      stairs[i] + stairs[i - 1] + dp[i - 3],
      stairs[i] + dp[i - 2]
    );
  }

  return dp[N - 1];
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(+line);

    if (input.length > input[0]) {
      console.log(sol(input));
      process.exit();
    }
  });
