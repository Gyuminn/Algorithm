const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > input[0][0] * 2) {
    const cases = input[0][0];
    input.shift();

    for (let i = 0; i < cases; i++) {
      let count = 1;
      let [N, M] = input[i * 2];
      const queue = input[i * 2 + 1];

      while (true) {
        const shiftItem = queue.shift();

        if (Math.max(...queue) <= shiftItem && M === 0) {
          console.log(count);
          break;
        } else if (Math.max(...queue) > shiftItem && M === 0) {
          queue.push(shiftItem);
          M = queue.length - 1;
        } else if (Math.max(...queue) > shiftItem) {
          queue.push(shiftItem);
          M -= 1;
        } else if (Math.max(...queue) <= shiftItem) {
          count += 1;
          M -= 1;
        }
      }
    }

    process.exit();
  }
};
rl.on("line", lineHandler);
