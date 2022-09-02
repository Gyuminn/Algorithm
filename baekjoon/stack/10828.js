const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (arr) => {
  const stack = [];
  let top = 0;
  let answer = "";

  const cmdObj = {
    push: (x) => {
      stack[top++] = x;
    },
    pop: () => {
      if (top) {
        top--;
        return stack.splice(-1);
      } else return -1;
    },
    size: () => top,
    empty: () => {
      return !top ? 1 : 0;
    },
    top: () => {
      return top ? stack[top - 1] : -1;
    },
  };

  arr.map((element) => {
    const [cmd, num] = element.split(" ");
    if (cmd === "push") cmdObj[cmd](+num);
    else answer += `${cmdObj[cmd]()}\n`;
  });

  return answer;
};

const lineHandler = (line) => {
  input.push(line);

  if (input.length > Number(input[0])) {
    rl.close();
  }
};

const closeHandler = () => {
  input.shift();
  console.log(solution(input));

  process.exit();
};

rl.on("line", lineHandler);
rl.on("close", closeHandler);
