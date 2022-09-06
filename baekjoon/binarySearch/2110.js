// 결정 알고리즘
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const lineHandler = (line) => {
  if (input.length === 0) {
    input.push(line.split(" ").map((v) => +v));
  } else input.push(Number(line));

  if (input.length > input[0][0]) {
    const [N, C] = input[0];
    input.shift();
    const routers = input;
    routers.sort((a, b) => a - b);

    // lt, rt, mid는 두 공유기 사이의 거리임.
    let lt = 1;
    let rt = routers[routers.length - 1];
    let answer;

    while (lt <= rt) {
      let mid = parseInt((lt + rt) / 2);
      if (count(routers, mid) >= C) {
        answer = mid;
        lt = mid + 1;
      } else rt = mid - 1;
    }
    console.log(answer);
    process.exit();
  }
};

const count = (routers, dist) => {
  // 제일 첫 집에는 무조건 공유기 설치 -> ep는 첫 번째 좌표, cnt는 1로 초기화
  let cnt = 1;
  let ep = routers[0];
  for (let i = 1; i < routers.length; i++) {
    if (routers[i] - ep >= dist) {
      cnt++;
      ep = routers[i];
    }
  }
  return cnt;
};

rl.on("line", lineHandler);
