const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const firstQuestion = `어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.\n`;

const depth = "";
const underline = "____";
const recursiveAnswer = `${depth}"재귀함수가 뭔가요?"
${depth}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.
${depth}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.
${depth}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`;

const lastAnswer = `${depth}"재귀함수가 뭔가요?"
${depth}`;

const lineHandler = (line) => {
  const n = Number(line);
  getAnswer();
  rl.close();
};

const getAnswer = (n) => {
  let answer = firstQuestion.concat(recursiveAnswer);

  console.log(answer);
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
