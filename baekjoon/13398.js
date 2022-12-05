const sol = (input) => {
  const [[N], ...[sequence]] = input;

  const dp = Array.from(Array(N), () => Array(2));
  // dp의 0열은 한 개를 빼지 않은 연숙 수열의 최대합.
  // dp의 1열은 한 개의 값을 뺀 연숙 수열 중의 최대 합.
  dp[0][0] = sequence[0];
  dp[0][1] = sequence[0];

  let answer = sequence[0];

  for (let i = 1; i < N; i++) {
    dp[i][0] = Math.max(sequence[i], dp[i - 1][0] + sequence[i]);
    dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][1] + sequence[i]);

    answer = Math.max(answer, dp[i][0], dp[i][1]);
  }
  return answer;
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length === 2) {
      console.log(sol(input));
      process.exit();
    }
  });
