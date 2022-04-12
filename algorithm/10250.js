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
    const frontDigits = N % H === 0 ? H : N % H;
    // 앞의 두 자리수는 나눈 나머지이고 만약 나머지가 0이라면 H 값이 된다.
    const backDigits =
      Math.floor(N % H) === 0 ? Math.floor(N / H) : Math.floor(N / H) + 1;
    // 뒤의 두 자리수는 나눈 나머지가 0이라면 몫, 아니라면 몫 + 1이다.
    const answer = `${frontDigits}${
      backDigits < 10 ? `0${backDigits}` : backDigits
      // 뒤의 두 자리수가 10보다 작다면 앞에 0을 붙여주어야 한다.
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
