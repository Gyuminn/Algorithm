const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function lineHandler(line) {
  input.push(line.split(" "));

  const testNum = Number(input[0]);
  if (input.length > testNum) rl.close();
}

function closeHandler() {
  for (let i = 1; i < input.length; i++) {
    turretTest(input[i]);
  }
  process.exit();
}

function turretTest(testArr) {
  // 터렛 테스트,  두 원의 접점.
  const [x1, y1, r1, x2, y2, r2] = testArr.map((element) => Number(element));
  const squaredDistance = (x2 - x1) ** 2 + (y2 - y1) ** 2;
  const squaredMinusRadius = (r1 - r2) ** 2;
  const squaredPlusRadius = (r1 + r2) ** 2;

  if (squaredDistance === 0 && r1 === r2) {
    console.log(-1);
  } else if (
    squaredDistance > squaredPlusRadius ||
    squaredDistance < squaredMinusRadius ||
    (squaredDistance === 0 && r1 !== r2)
  ) {
    console.log(0);
  } else if (
    squaredDistance === squaredPlusRadius ||
    squaredDistance === squaredMinusRadius
  ) {
    console.log(1);
  } else {
    console.log(2);
  }
}
rl.on("line", lineHandler);
rl.on("close", closeHandler);
