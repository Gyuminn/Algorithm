const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line.split(" "));

  if (input.length > 3) {
    const n = Number(input[0][0]);
    const numSet = input[1];
    const m = Number(input[2][0]);
    const nums = input[3];

    testNum(n, m, numSet, nums);
    rl.close();
  }
};

const testNum = (n, m, numSet, nums) => {
  const numMap = new Map();
  let answer = [];

  numSet.forEach((element) => {
    if (numMap.has(element)) {
      numMap.set(element, numMap.get(element) + 1);
    } else {
      numMap.set(element, 1);
    }
  });

  nums.forEach((element) => answer.push(numMap.get(element) || 0));
  console.log(answer.join(" "));
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
