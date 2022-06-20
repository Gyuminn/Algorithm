const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line.split(" "));

  if (input.length > 1) {
    const N = Number(input[0][0]);
    const cards = input[1].map((v) => +v);

    purchaseCard(N, cards);
    rl.close();
  }
};

const purchaseCard = (N, cards) => {
  const dp = [0, ...cards];

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j] + dp[j]);
    }
  }

  console.log(dp[N]);
};
const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("clsoe", closeHandler);
