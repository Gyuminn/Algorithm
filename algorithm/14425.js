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

    // 시간 복잡도가 낮은 Set을 이용하여 테스트하기 위함
    // 0부터 n-1까지 배열을 Set 객체로 생성
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
