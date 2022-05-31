const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function lineHandler(line) {
  const radius = Number(line);
  const normalArea = Math.PI * radius ** 2;
  const taxiArea = (radius * Math.sqrt(2)) ** 2;

  console.log(normalArea);
  console.log(taxiArea);

  rl.close();
}

function closeHandler() {
  process.exit();
}
rl.on("line", lineHandler);
rl.on("close", closeHandler);
