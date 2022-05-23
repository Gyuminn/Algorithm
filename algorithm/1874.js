const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line);

  if (input.length > Number(input[0])) {
    console.log(stackTest());
    rl.close();
  }
};

const stackTest = () => {
  const cases = Number(input[0]);
  input.shift();

  const stack = [];
  let answer = [];
  let count = 1;

  for (let i = 0; i < cases; i++) {
    const num = Number(input[i]);
    while (count <= num) {
      stack.push(count++);
      answer += "+";
    }

    const popedItem = stack.pop();
    if (popedItem !== num) {
      return "NO";
    }
    answer += "-";
  }
  return answer.split("").join("\n");
};

const closeHandler = () => {
  process.exit();
};

rl.on("line", lineHandler);
rl.on("close", closeHandler);
