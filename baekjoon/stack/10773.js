const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(Number(line));

  if (input.length > input[0]) {
    input.shift();
    const stack = [];

    for (let x of input) {
      if (x === 0) {
        stack.pop();
        continue;
      }
      stack.push(x);
    }
    console.log(
      stack.length === 0 ? 0 : stack.reduce((prev, cur) => prev + cur)
    );
    process.exit();
  }
};

rl.on("line", lineHandler);
