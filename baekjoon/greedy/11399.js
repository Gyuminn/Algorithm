const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));
  if (input.length > 1) {
    input.shift();
    const times = input[0].sort((a, b) => a - b);
    let sumTimes = Array.from({ length: times.length }, () => 0);
    sumTimes[0] = times[0];
    for (let i = 1; i < times.length; i++) {
      sumTimes[i] = sumTimes[i - 1] + times[i];
    }
    console.log(sumTimes.reduce((acc, cur) => acc + cur));
    process.exit();
  }
};
rl.on("line", lineHandler);
