const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(Number(line));

  if (input.length > input[0]) {
    getSumCase(input);
    rl.close();
  }
};

const getSumCase = (arr) => {
  const dp = {
    1: 1,
    2: 2,
    3: 4,
  };

  arr.shift();
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    {
      for (let j = 4; j <= num; j++) {
        dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
      }
    }
  }

  arr.forEach((v) => console.log(dp[v]));
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
