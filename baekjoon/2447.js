const readline = require("readline");
const { start } = require("repl");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

function lineHandler(line) {
  const input = Number(line);
  allStars(input);
  console.log(lines.join(""));

  rl.close();
}

function allStars(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      recursiveStar(i, j, num);
    }
    lines.push("\n");
  }
}

function recursiveStar(i, j, num) {
  if (i % 3 === 1 && j % 3 === 1) {
    lines.push(" ");
  } else {
    if (num === 1) {
      lines.push("*");
    } else {
      recursiveStar(Math.floor(i / 3), Math.floor(j / 3), Math.floor(num / 3));
    }
  }
}

function closeHandler() {
  process.exit();
}
rl.on("line", lineHandler);
rl.on("close", closeHandler);
