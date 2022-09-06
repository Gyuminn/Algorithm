const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  if (input.length === 0) {
    input.push(line.split(" ").map((v) => +v));
  } else input.push(Number(line));

  if (input.length > input[0][0]) {
    let [N, K] = input[0];
    input.shift();
    const coins = input;
    let cnt = 0;

    for (let i = coins.length - 1; i >= 0; i--) {
      if (coins[i] <= K) {
        cnt += Math.floor(K / coins[i]);
        K = K % coins[i];
      }
    }

    console.log(cnt);
    process.exit();
  }
};

rl.on("line", lineHandler);
