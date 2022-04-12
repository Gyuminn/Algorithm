const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let input = [];
let answerList = [];

function lineHandler(line) {
  count++;
  input.push(line);

  const caseNum = Number(input[0]);

  if (caseNum < count) {
    rl.close();
  }
}

function closeHandler() {
  for (let i = 1; i < input.length; i++) {
    const [H, W, N] = input[i].split(" ");
    const frontDigits = N % H;
    const backDigits =
      Math.floor(N % H) === 0 ? Math.floor(N / H) : Math.floor(N / H) + 1;

    const answer = `${frontDigits === 0 ? H : frontDigits}${
      backDigits < 10 ? `0${backDigits}` : backDigits
    }`;
    answerList.push(answer);
  }
  for (let i = 0; i < answerList.length; i++) {
    console.log(answerList[i]);
  }
  process.exit();
}
rl.on("line", lineHandler);
rl.on("close", closeHandler);
