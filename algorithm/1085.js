const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function lineHandler(line) {
  const [X, Y, W, H] = line.split(" ").map((element) => Number(element));

  const distance = [H - Y, W - X, Y, X];
  console.log(Math.min(...distance));
  rl.close();
}
function closeHandler() {
  process.exit();
}

rl.on("line", lineHandler);
rl.on("close", closeHandler);
