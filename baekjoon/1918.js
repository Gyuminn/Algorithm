const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stodut,
});

const lineHandler = (line) => {
  const str = line;
  getPostfix(str);
  rl.close();
};

//후위 표기식으로 변환하기
const getPostfix = (str) => {
  let stack = [];
  let answer = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      answer += str[i];
    } else if (str[i] === "(") {
      stack.push(str[i]);
    } else if (str[i] === ")") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        answer += stack.pop();
      }
      stack.pop();
    } else if (str[i] === "+" || str[i] === "-") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        answer += stack.pop();
      }
      stack.push(str[i]);
    } else if (str[i] === "*" || str[i] === "/") {
      while (
        (stack.length && stack[stack.length - 1] === "*") ||
        stack[stack.length - 1] === "/"
      ) {
        answer += stack.pop();
      }
      stack.push(str[i]);
    }
  }
  while (stack.length) {
    answer += stack.pop();
  }
  console.log(answer);
};
const closeHandler = () => {
  process.exit();
};

rl.on("line", lineHandler);
rl.on("close", closeHandler);
