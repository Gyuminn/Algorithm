const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function lineHandler(line) {
  input.push(line.split(" "));

  if (input.length >= 3) {
    rl.close();
  }
}

function closeHandler() {
  let xCoordinates = [];
  let yCoordinates = [];

  input.forEach((element) => {
    xCoordinates.push(Number(element[0]));
    yCoordinates.push(Number(element[1]));
  });

  xCoordinates.sort((a, b) => a - b);
  yCoordinates.sort((a, b) => a - b);

  console.log(
    xCoordinates[0] === xCoordinates[1] ? xCoordinates[2] : xCoordinates[0],
    yCoordinates[0] === yCoordinates[1] ? yCoordinates[2] : yCoordinates[0]
  );

  process.exit();
}

rl.on("line", lineHandler);
rl.on("close", closeHandler);
