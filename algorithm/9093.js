const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line);

  if (input.length > Number(input[0])) {
    convert();
    rl.close();
  }
};

const convert = () => {
  let answer = [];
  const n = Number(input[0]);

  input.shift();
  for (let i = 0; i < n; i++) {
    let words = input[i].split(" ");
    answer.push(
      words.map((word) => word.split("").reverse().join("")).join(" ")
    );
  }

  console.log(answer.join(`\n`));
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
