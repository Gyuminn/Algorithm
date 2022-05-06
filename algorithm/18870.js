const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line.split(" ").map((element) => Number(element)));
  if (input.length > 1) {
    input.shift();
    compression(input[0]);
    rl.close();
  }
};

const compression = (arr) => {
  // 각 배열을 순회하면서 자신보다 작은 수의 개수(중복은 제거)가 몇개인지 세기.
  const set = new Set(arr);
  const testArr = [...set].sort((a, b) => a - b);
  const testObj = {};
  const result = [];

  testArr.forEach((item, idx) => (testObj[item] = idx));

  for (let i = 0; i < arr.length; i++) {
    result.push(testObj[arr[i]]);
  }
  console.log(result.join(" "));
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
