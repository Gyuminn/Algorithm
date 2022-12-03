const sol = (input) => {
  const [[N], ...[sequence]] = input;

  const dp = Array.from({ length: N });

  dp[0] = 1;

  for (let i = 1; i < N; i++) {
    let max = 0;
    for (let j = i; j >= 0; j--) {
      if (sequence[j] > sequence[i] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
  }
  return Math.max(...dp);
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length == 2) {
      console.log(sol(input));
      process.exit();
    }
  });
