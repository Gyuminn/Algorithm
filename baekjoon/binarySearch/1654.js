const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const lineHandler = (line) => {
  if (input.length > 0) {
    input.push(Number(line));
  } else {
    input.push(line.split(" ").map((v) => +v));
  }

  if (input.length > input[0][0]) {
    const [K, N] = input[0];
    input.shift();
    const lines = input.sort((a, b) => a - b);
    let max = Math.max(...lines);
    let min = 1;

    while (min <= max) {
      let mid = parseInt((min + max) / 2);
      let pices = lines
        .map((line) => parseInt(line / mid))
        .reduce((prev, cur) => prev + cur);

      if (pices >= N) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }
    console.log(max);
    process.exit();
  }
};
rl.on("line", lineHandler);
