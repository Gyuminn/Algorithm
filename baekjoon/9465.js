const sol = (input) => {
  const T = input[0][0];

  const answer = [];

  const getMax = (testCase) => {
    const [[N], ...stickers] = testCase;
    const dp = Array.from(Array(2), () => Array(N));

    dp[0][0] = 0;
    dp[1][0] = 0;
    dp[0][1] = stickers[0][0];
    dp[1][1] = stickers[1][0];

    for (let i = 2; i <= N; i++) {
      dp[0][i] = Math.max(dp[1][i - 1], dp[1][i - 2]) + stickers[0][i - 1];
      dp[1][i] = Math.max(dp[0][i - 1], dp[0][i - 2]) + stickers[1][i - 1];
    }

    return Math.max(dp[0][N], dp[1][N]);
  };

  for (let i = 1; i < T * 3 - 1; i += 3) {
    answer.push(getMax(input.slice(i, i + 3)));
  }
  return answer.join(`\n`);
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length > input[0][0] * 3) {
      console.log(sol(input));
      process.exit();
    }
  });
