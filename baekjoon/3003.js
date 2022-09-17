const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

const lineHandler = (line) => {
  const input = line.split(" ").map((v) => +v);

  let chess = [1, 1, 2, 2, 2, 8];
  let result = chess.map((v, idx) => v - input[idx]);
  console.log(result.join(" "));
  process.exit();
};

rl.on("line", lineHandler);
