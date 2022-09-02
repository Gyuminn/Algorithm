const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const lineHandler = (line) => {
  input.push(line);

  if (input[input.length - 1] === ".") {
    input.pop();

    let answer = Array.from({ length: input.length }, () => "yes");
    for (let i = 0; i < input.length; i++) {
      let str = input[i];
      let stack = [];
      let isNo = false;

      for (let x of str) {
        if (x === "(" || x === "[") stack.push(x);

        if (x === ")" && stack.pop() !== "(") {
          answer[i] = "no";
          isNo = true;
          break;
        } else if (x === "]" && stack.pop() !== "[") {
          answer[i] = "no";
          isNo = true;
          break;
        }
      }
      if (stack.length !== 0 && !isNo) answer[i] = "no";
    }

    console.log(answer.join(`\n`));
    process.exit();
  }
};
rl.on("line", lineHandler);
