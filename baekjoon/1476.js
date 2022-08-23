// 메모리 초과로 nodeJS로는 백준에서 통과할 수 없으나, 풀이법은 맞음.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const [E, S, M] = line.split(" ").map((v) => +v);
  let Y = 1;
  while (1) {
    if ((Y - E) % 15 === 0 && (Y - S) % 28 === 0 && (Y - M) % 19 === 0) {
      console.log(Y);
      break;
    } else {
      Y++;
    }
  }
  process.exit();
});
