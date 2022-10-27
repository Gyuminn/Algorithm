const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let count = 0;
let day = 0;
let n = 0;

rl.on("line", function (line) {
  if (!count) {
    n = +line.split(" ")[0];
    day = +line.split(" ")[1];
  } else {
    input = line.split(" ").map((e) => +e);
  }
  count++;
}).on("close", function () {
  solution(input, day, n);
  process.exit();
});

const solution = (input, day, n) => {
  let i = 0;
  let sum = 0;

  for (let k = 0; k < day; k++) {
    sum += input[k];
  }
  let max = sum;

  for (let j = day; j < n; j++) {
    sum += input[j];

    sum -= input[i++];

    max = Math.max(max, sum);
  }

  console.log(max);
};
