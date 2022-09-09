const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => BigInt(v)));

  if (input.length > 2) {
    const dist = input[1];
    const costs = input[2];
    let curPrice = costs[0];
    let cost = 0n;

    for (let i = 0; i < costs.length - 1; i++) {
      cost += curPrice * dist[i];
      if (curPrice > costs[i + 1]) {
        curPrice = costs[i + 1];
      }
    }
    console.log(String(cost));
    process.exit();
  }
};
rl.on("line", lineHandler);
