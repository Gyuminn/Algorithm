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
    rl.close();
  }
};

const closeHandler = () => {
  const n = Number(input[0][0]);
  const m = Number(input[0][1]);

  input.shift();
  const set = input.slice(0, n);
  const poketmonSet = new Map(set.map((key, value) => [key, value + 1]));
  const poketmons = input.slice(n, n + m);
  let answer = [];

  poketmons.forEach((element) => {
    if (Number.isNaN(+element)) {
      answer.push(poketmonSet.get(element));
    } else {
      answer.push(set[element - 1]);
    }
  });
  console.log(answer.join(`\n`));
};

rl.on("line", lineHandler);
rl.on("close", closeHandler);
