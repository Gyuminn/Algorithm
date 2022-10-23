const sol = (input) => {
  input.shift();

  const max = Math.max(...input);

  const dp = Array.from({ length: 101 });

  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 1;
  dp[4] = 2;
  dp[5] = 2;

  for (let i = 6; i <= max; i++) {
    dp[i] = dp[i - 1] + dp[i - 5];
  }

  input.forEach((v) => {
    console.log(dp[v]);
  });
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
      sol(input);
      process.exit();
    }
  });
