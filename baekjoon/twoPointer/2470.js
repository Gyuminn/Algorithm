const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  ourput: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > 1) {
    const N = input[0][0];
    const arr = input[1].sort((a, b) => a - b);
    let startP = 0;
    let endP = arr[N - 1];
    let answer = "";
    let tempSum = Number.MAX_SAFE_INTEGER;

    while (startP < endP) {
      let sum = arr[startP] + arr[endP];
      let absSum = Math.abs(sum);

      if (absSum < tempSum) {
        tempSum = absSum;
        answer = [arr[startP], arr[endP]];
      }

      if (sum < 0) {
        startP++;
      } else {
        endP--;
      }
    }
    console.log(answer.join(" "));
    process.exit();
  }
};
rl.on("line", lineHandler);
