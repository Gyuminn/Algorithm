const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > 1) {
    getLIS(input[0][0], input[1]);
    rl.close();
  }
};

const getLIS = (arrLength, arr) => {
  let maxLength = 0;
  let result = [];
  let DP = Array.from({ length: arrLength }, () => 0);

  for (let i = 0; i < arrLength; i++) {
    let max = 0;
    let maxIndex = -1;
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && DP[j] > max) {
        max = DP[j];
        maxIndex = j;
      }
    }
    DP[i] = max + 1;
    result[i] = maxIndex !== -1 ? result[maxIndex].concat(arr[i]) : [arr[i]];
  }
  maxLength = Math.max(...DP);
  console.log(maxLength);
  console.log(result[DP.indexOf(maxLength)].join(" "));
};
const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
