const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineHandler = (line) => {
  const input = line.split("");
  console.log(input.sort((a, b) => b - a).join(""));
  rl.close();
};

const closeHandler = () => {
  process.exit();
};

rl.on("line", lineHandler);
rl.on("close", closeHandler);
