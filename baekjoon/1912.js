const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > 1) {
    getContinuitySumMax(input[0][0], input[1]);
    rl.close();
  }
};

const getContinuitySumMax = (arrLength, arr) => {
  let DP = Array.from({ legnth: arrLength }, () => 0);
  DP[0] = arr[0];
  for (let i = 1; i < arrLength; i++) {
    DP[i] = DP[i - 1] + arr[i] > arr[i] ? DP[i - 1] + arr[i] : arr[i];
  }

  const answer = Math.max(...DP);
  console.log(answer);
};
const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
