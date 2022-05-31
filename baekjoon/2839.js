const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function lineHandler(line) {
  let SUGAR = Number(line);
  const big = 5;
  const small = 3;
  let bags = 0;

  while (true) {
    if (SUGAR % big === 0) {
      console.log(SUGAR / big + bags);
      break;
    } else if (SUGAR <= 0) {
      console.log(-1);
      break;
    }
    SUGAR = SUGAR - small;
    bags++;
  }
  // 내가 처음부터 짠 코드는 아니다.
  // 누군가가 짠 코드인데 굉장히 인상깊다. 이거만큼 좋은 방법이 없는 것 같아 이렇게 풀었다.

  rl.close();
}
function closeHandler() {
  process.exit();
}
rl.on("line", lineHandler);
rl.on("close", closeHandler);
