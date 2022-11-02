const sol = (input) => {
  let answer = "";
  const [[N, M], ...arr] = input;
  input.shift();
  const nums = arr.slice(0, N);
  const dp = Array.from({ length: N });
  nums.forEach((v, idx) => {
    dp[idx] = v.slice(0);
  });

  nums.forEach((row, idx) => {
    row.forEach((num, i) => {
      dp[idx][i] = num;
      if (i !== 0) dp[idx][i] += dp[idx][i - 1];
      if (idx !== 0) dp[idx][i] += dp[idx - 1][i];
      if (i !== 0 && idx !== 0) dp[idx][i] -= dp[idx - 1][i - 1];
    });
  });

  input = input.splice(N);
  input.forEach(([x1, y1, x2, y2]) => {
    let sum = dp[x2 - 1][y2 - 1];
    if (x1 !== 1) sum -= dp[x1 - 2][y2 - 1];
    if (y1 !== 1) sum -= dp[x2 - 1][y1 - 2];
    if (x1 !== 1 && y1 !== 1) sum += dp[x1 - 2][y1 - 2];
    answer += `${sum}\n`;
  });
  return answer.trim();
};

const input = [];
require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length > input[0][0] + input[0][1]) {
      console.log(sol(input));
      process.exit();
    }
  });
