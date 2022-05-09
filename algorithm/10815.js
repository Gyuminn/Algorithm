const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line.split(" "));

  if (input.length > 3) {
    testCard(input);
    rl.close();
  }
};

const testCard = (arr) => {
  const cardSet = new Set(arr[1]);
  const cards = arr[3];
  let result = [];

  cards.forEach((element) =>
    cardSet.has(element) === true ? result.push(1) : result.push(0)
  );

  console.log(result.join(" "));
};
const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
