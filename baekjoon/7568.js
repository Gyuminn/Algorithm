const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line.split(" "));

  if (input.length > input[0]) {
    rl.close();
  }
};

const closeHandler = () => {
  let rates = [];
  for (let i = 1; i < input.length; i++) {
    let rate = 1;
    const standardArr = input[i].map((element) => Number(element));

    for (let j = 1; j < input.length; j++) {
      const relativeArr = input[j].map((element) => Number(element));
      if (standardArr === relativeArr) {
        continue;
      }

      if (standardArr[0] < relativeArr[0] && standardArr[1] < relativeArr[1]) {
        rate++;
      }
    }
    rates.push(rate);
  }
  console.log(rates.join(" "));

  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
