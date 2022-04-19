const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function lineHandler(line) {
  input.push(line.split(" ").map((element) => Number(element)));

  if (input[input.length - 1].filter((element) => element === 0).length === 3) {
    rl.close();
  }
}

function closeHandler() {
  for (let i = 0; i < input.length - 1; i++) {
    isRightTriangle(input[i]);
  }
  process.exit();
}

function isRightTriangle(testArr) {
  // 직각삼각형 테스트
  const squaredArr = testArr.map((length) => length ** 2).sort((a, b) => a - b);
  console.log(
    squaredArr[2] === squaredArr[0] + squaredArr[1] ? `right` : `wrong`
  );
}

rl.on("line", lineHandler);
rl.on("close", closeHandler);
