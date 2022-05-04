const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line);

  if (input.length > Number(input[0])) {
    input.shift();
    strSort(input);
    rl.close();
  }
};

const strSort = (arr) => {
  const deduplicateObj = new Set(arr);
  const deduplicateArr = [...deduplicateObj];
  deduplicateArr.sort((a, b) => a.length - b.length || a.localeCompare(b));
  console.log(deduplicateArr.join(`\n`));
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
