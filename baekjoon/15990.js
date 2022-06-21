const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const lineHandler = (line) => {
  input.push(Number(line));

  if (input.length > input[0]) {
    const n = input[0];
    input.shift();

    console.log(getNumCases(n, input));
    rl.close();
  }
};

const getNumCases = (n, arr) => {
  const MOD = 1000000009;
  const SIZE = 100000;
  // ES6를 지원할 경우 사용 가능한 2차원 배열 생성 방법.
  const dp = Array.from({ length: SIZE + 1 }, () => new Array(4).fill(0));
  let answer = "";

  dp[1][1] = dp[2][2] = dp[3][1] = dp[3][2] = dp[3][3] = 1;
  for (let i = 4; i < SIZE + 1; i++) {
    dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % MOD;
    dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % MOD;
    dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % MOD;
  }

  arr.map((v) => {
    answer += `${(dp[v][1] + dp[v][2] + dp[v][3]) % MOD}\n`;
  });

  return answer;
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
