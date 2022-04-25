const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line.split(" "));

  if (input.length >= 2) {
    blackJack();
    rl.close();
  }
};

const blackJack = () => {
  const [cardNum, maxNum] = input[0].map((element) => Number(element));
  const numbers = input[1].map((element) => Number(element));

  let sumThreeNum = [];

  for (let i = 0; i < cardNum - 2; i++) {
    for (let j = i + 1; j < cardNum - 1; j++) {
      for (let k = j + 1; k < cardNum; k++) {
        if (numbers[i] + numbers[j] + numbers[k] <= maxNum) {
          sumThreeNum.push(numbers[i] + numbers[j] + numbers[k]);
        }
      }
    }
  }

  console.log(sumThreeNum.sort((a, b) => b - a)[0]);
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
