const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > 2) {
    const N = input[0][0];
    const arr = input[1];
    const X = input[2][0];
    arr.sort((a, b) => a - b);
    let p1 = 0;
    let p2 = N - 1;
    let answer = 0;
    while (p1 < p2) {
      if (arr[p1] + arr[p2] === X) {
        answer += 1;
        p1++;
        p2--;
      } else if (arr[p1] + arr[p2] < X) {
        p1++;
      } else {
        p2--;
      }
    }
    console.log(answer);
    process.exit();
  }
};

rl.on("line", lineHandler);
