const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > 1) {
    console.log(LIS(input[0][0], input[1]));
    rl.close();
  }
};

const LIS = (arrLength, arr) => {
  let answer = 0;
  let dp = Array.from({ length: arrLength }, () => 0);
  dp[0] = 1;

  for (let i = 1; i < arrLength; i++) {
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
