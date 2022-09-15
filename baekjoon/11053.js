const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > 1) {
    console.log(LIS(input[1]));
    rl.close();
  }
};

// 최대 부분 증가 수열 풀이
const LIS = (arr) => {
  let answer = 0;
  let dp = Array.from({ length: arr.Length }, () => 0);
  dp[0] = 1;

  for (let i = 1; i < arr.Length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
  }
  answer = Math.max(...dp);
  return answer;
};
const closeHandler = () => {
  process.exit();
};

rl.on("line", lineHandler);
rl.on("close", closeHandler);
