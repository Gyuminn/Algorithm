const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineHandler = (line) => {
  const n = Number(line);
  console.table(getPrinaryNumber(n));
  rl.close();
};

const closeHandler = () => {
  process.exit();
};

const getPrinaryNumber = (n) => {
  let answer = 0;
  const DP = Array.from({ length: n + 1 }, () => new Array(2).fill(0));
  // DP[i][j]는 i번째 자리중에 끝이 j(0 or 1)) 로 끝나는 이친수의 개수.

  if (n === 1) {
    return 1;
  } else {
    DP[1][1] = 1;
    DP[2][0] = 1;

    for (let i = 3; i <= n; i++) {
      DP[i][0] = BigInt(DP[i - 1][0]) + BigInt(DP[i - 1][1]);
      DP[i][1] = BigInt(DP[i - 1][0]);
    }

    answer = String(DP[n][0] + DP[n][1]);
  }

  return answer;
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
