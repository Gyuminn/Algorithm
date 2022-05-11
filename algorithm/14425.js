const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  // 첫 입력에만 공백 구분
  if (input.length === 0) {
    input.push(line.split(" "));
  } else {
    input.push(line);
  }

  if (input.length > Number(input[0][0]) + Number(input[0][1])) {
    const n = Number(input[0][0]);
    const m = Number(input[0][1]);

    input.shift();
    const strSet = new Set(input.slice(0, n));
    const testArr = input.slice(n, n + m);
    strTest(strSet, testArr);
    rl.close();
  }
};

const strTest = (strSet, testArr) => {
  let count = 0;
  testArr.map((element) => {
    if (strSet.has(element)) count++;
  });
  console.log(count);
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
