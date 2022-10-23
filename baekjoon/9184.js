const sol = (input) => {
  input.pop();

  let memo = [];

  // 3차원 배열 구현 방법 중 하나
  for (let i = 0; i <= 101; i++) {
    memo[i] = [];
    for (let j = 0; j <= 101; j++) {
      memo[i][j] = [];
      for (let k = 0; k <= 101; k++) {
        memo[i][j][k] = 0;
      }
    }
  }

  memo[50][50][50] = 1;

  const w = (a, b, c) => {
    if (memo[a][b][c] !== 0) {
      return memo[a][b][c];
    } else {
      if (a <= 50 || b <= 50 || c <= 50) {
        return 1;
      } else if (a > 70 || b > 70 || c > 70) {
        return w(70, 70, 70);
      } else if (a < b && b < c) {
        memo[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
      } else {
        memo[a][b][c] =
          w(a - 1, b, c) +
          w(a - 1, b - 1, c) +
          w(a - 1, b, c - 1) -
          w(a - 1, b - 1, c - 1);
      }
    }
    return memo[a][b][c];
  };

  input.forEach((nums) => {
    const answer = w(nums[0] + 50, nums[1] + 50, nums[2] + 50);
    console.log(`w(${nums[0]}, ${nums[1]}, ${nums[2]}) = ${answer}`);
  });
};
const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input[input.length - 1].toString() === [-1, -1, -1].toString()) {
      sol(input);
      process.exit();
    }
  });
