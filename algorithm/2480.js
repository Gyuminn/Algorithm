const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function gameHandler(line) {
  const [A, B, C] = line
    .split(" ")
    .map((x) => Number(x))
    .sort((a, b) => a - b);

  if (A === B && B === C) {
    console.log(10000 + A * 1000);
  } else if (A === B || B === C) {
    console.log(1000 + B * 100);
  } else {
    console.log(C * 100);
  }
  reader.close();
}

function closeHandler() {
  process.exit();
}

reader.on("line", gameHandler);
reader.on("close", closeHandler);
