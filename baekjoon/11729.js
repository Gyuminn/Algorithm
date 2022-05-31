// 하노이 탑 문제
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let answer = [];

const lineHandler = (line) => {
  const input = Number(line);
  Hanoi(input, 1, 2, 3);
  console.log(count);
  console.log(answer.map((element) => element.join(" ")).join("\n"));
  rl.close();
};

const Hanoi = (num, from, other, to) => {
  if (num === 0) return;
  else {
    Hanoi(num - 1, from, to, other);
    answer.push([from, to]);
    count++;
    Hanoi(num - 1, other, from, to);
  }
};

const closeHandler = () => {
  process.exit();
};

rl.on("line", lineHandler);
rl.on("close", closeHandler);
