const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function lineHandler(line) {
  const input = line.split(" ");

  const sum = BigInt(input[0]) + BigInt(input[1]);
  console.log(sum.toString());
  // 큰 숫자 자료형
  rl.close();
}

function closeHandler() {
  process.exit();
}
rl.on("line", lineHandler);
rl.on("close", closeHandler);
