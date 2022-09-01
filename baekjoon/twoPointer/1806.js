const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > 1) {
    const [N, S] = input[0];
    const arr = input[1];

    let lt = 0;
    let rt = 0;
    let sum = arr[lt];

    let answer = Number.MAX_SAFE_INTEGER;

    while (lt < N) {
      if (sum >= S) {
        let length = rt - lt + 1;
        if (length < answer) {
          answer = length;
        }
        sum -= arr[lt++];
      } else {
        rt++;
        if (rt === N) {
          break;
        }
        sum += arr[rt];
      }
    }

    if (answer === Number.MAX_SAFE_INTEGER) answer = 0;
    console.log(answer);
    process.exit();
  }
};
rl.on("line", lineHandler);
