const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line);

  if (input.length > Number(input[0])) {
    validPsTest();
    rl.close();
  }
};

const validPsTest = () => {
  const n = Number(input[0]);
  input.shift();

  for (let i = 0; i < n; i++) {
    const cases = input[i];
    const stack = [];
    let result = "YES";

    for (let j = 0; j < cases.length; j++) {
      if (cases[j] === "(") {
        stack.push(1);
      } else {
        if (!stack.pop()) {
          result = "NO";
          break;
        }
      }
    }
    if (stack.length !== 0) {
      result = "NO";
    }
    console.log(result);
  }
};

const closeHandler = () => {
  process.exit();
};

rl.on("line", lineHandler);
rl.on("close", closeHandler);
