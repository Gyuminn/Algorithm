const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  if (input.length === 0) {
    input.push(line.split(" "));
  } else {
    input.push(line);
  }

  if (input.length > Number(input[0][0]) + Number(input[0][1])) {
    getOffBrand();
    rl.close();
  }
};

const getOffBrand = () => {
  const n = Number(input[0][0]);
  const m = Number(input[0][1]);
  let answer = [];

  input.shift();
  const neverHeard = new Set(input.slice(0, n));
  const neverSeen = input.slice(n, n + m);

  neverSeen.forEach((element) => {
    if (neverHeard.has(element)) {
      answer.push(element);
    }
  });

  // 사전순 정렬, sort
  answer.sort((a, b) => a.localeCompare(b));

  answer.unshift(answer.length);
  console.log(answer.join("\n"));
};

const closeHandler = () => {
  process.exit();
};

rl.on("line", lineHandler);
rl.on("close", closeHandler);
