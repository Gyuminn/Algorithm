const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line.split(" "));

  if (input.length > 2) {
    getSymmetricDiff();
  }
};

const getSymmetricDiff = () => {
  let count = 0;
  const a = new Set(input[1]);
  const b = new Set(input[2]);

  a.forEach((element) => {
    if (b.has(element)) {
      a.delete(element);
      b.delete(element);
    }
  });

  console.log(a.size + b.size);
  rl.close();
};

const closeHandler = () => {
  process.exit();
};

rl.on("line", lineHandler);
rl.on("close", closeHandler);
