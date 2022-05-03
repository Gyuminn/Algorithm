const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line.split(" "));

  if (input.length > Number(input[0])) {
    input.shift();
    sortCoordinate(input);
    rl.close();
  }
};

const sortCoordinate = (arr) => {
  arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  console.log(arr.map((element) => element.join(" ")).join(`\n`));
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
