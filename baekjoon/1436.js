const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineHandler = (line) => {
  const input = Number(line);
  findEnd(input);
  rl.close();
};

let answers = [];

const findEnd = (num) => {
  for (let i = 666; answers.length < num; i++)
    for (let j = 0; j < i.toString().length - 2; j++) {
      const strNum = i.toString();
      if (strNum[j] === "6" && strNum[j + 1] === "6" && strNum[j + 2] === "6") {
        answers.push(strNum);
        break;
      }
    }
  console.log(answers[answers.length - 1]);
};
const closeHandler = () => {
  process.exit();
};

rl.on("line", lineHandler);
rl.on("close", closeHandler);
