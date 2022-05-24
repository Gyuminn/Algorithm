const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  if (input.length < 2) {
    input.push(line);
  } else {
    input.push(line.split(" "));
  }

  if (input.length > Number(input[1]) + 1) {
    excuteEditor(input);
    rl.close();
  }
};

const excuteEditor = (arr) => {
  let leftStack = arr[0].split("");
  let rightStack = [];
  const m = Number(arr[1]);

  arr.splice(0, 2);

  for (let i = 0; i < m; i++) {
    let cmd = arr[i][0];
    let str = arr[i][1];
    if (cmd === "L" && leftStack.length) rightStack.push(leftStack.pop());
    else if (cmd === "D" && rightStack.length) leftStack.push(rightStack.pop());
    else if (cmd === "B") leftStack.pop();
    else if (cmd === "P") leftStack.push(str);
  }

  let answer = leftStack.join("");
  answer += rightStack.reverse().join("");
  console.log(answer);
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
