const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineHandler = (line) => {
  const N = Number(line);
  const arr = Array.from({ length: N }, (v, i) => i + 1);

  while (arr.length !== 1) {
    arr.shift();
    arr.push(arr.shift());
  }
  console.log(arr[0]);
  process.exit();
};
rl.on("line", lineHandler);
