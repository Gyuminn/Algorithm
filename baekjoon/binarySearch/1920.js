const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > 3) {
    const numbers = input[1];
    const testNums = input[3];
    numbers.sort((a, b) => a - b);

    let answer = Array.from({ length: testNums.length }, () => 0);

    for (let i = 0; i < testNums.length; i++) {
      let lt = 0;
      let rt = numbers.length - 1;
      while (lt <= rt) {
        const mid = parseInt((lt + rt) / 2);

        if (numbers[mid] === testNums[i]) {
          answer[i] = 1;
          break;
        } else if (numbers[mid] > testNums[i]) {
          rt = mid - 1;
        } else lt = mid + 1;
      }
    }
    console.log(answer.join(`\n`));

    process.exit();
  }
};
rl.on("line", lineHandler);
