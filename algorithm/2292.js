const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function lineHandler(line) {
  const input = Number(line);

  let i = 1;
  let sum = 1;

  while (sum < input) {
    sum += 6 * i;
    i++;
  }

  console.log(i);
  rl.close();
}
function closeHandler() {
  process.exit();
}
rl.on("line", lineHandler);
rl.on("cloee", closeHandler);
