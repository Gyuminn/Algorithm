const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function lineHandler(line) {
  const input = line.split(" ");

  const up = Number(input[0]);
  const down = Number(input[1]);
  const goal = Number(input[2]);

  console.log(`${Math.ceil((goal - down) / (up - down))}`);

  rl.close();
}

function closeHandler() {
  process.exit();
}
rl.on("line", lineHandler);
rl.on("close", closeHandler);
