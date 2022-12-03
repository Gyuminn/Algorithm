const sol = (input) => {
  const [[N], ...[sequence]] = input;

  const dp = Array.from({ length: N });

  for (let i = 0; i < sequence.length; i++) {
    dp[i] = sequence[i];
    for (let j = 0; j < i; j++) {
      if (sequence[j] < sequence[i] && dp[i] < dp[j] + sequence[i]) {
        dp[i] = dp[j] + sequence[i];
      }
    }
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
      console.table(sol(input));
      process.exit();
    }
  });
