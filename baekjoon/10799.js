const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineHandler = (line) => {
  const str = line;
  getAnswer(str);
  rl.close();
};

const getAnswer = (str) => {
  let stack = [];
  let answer = 0;

  for (let i in str) {
    if (str[i] === "(") {
      stack.push(str[i]);
    } else {
      if (str[i - 1] === "(") {
        stack.pop();
        answer += stack.length;
      } else {
        stack.pop();
        answer++;
      }
    }
  }
  console.log(answer);
};

const closeHandler = () => {
  process.exit();
};

rl.on("line", lineHandler);
rl.on("close", closeHandler);
