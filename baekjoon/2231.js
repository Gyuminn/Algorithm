const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineHandler = (line) => {
  divideSum(line);
  rl.close();
};

// 분해합.
const divideSum = (str) => {
  let num = Number(str);

  for (let i = 1; i <= num; i++) {
    const digits = i
      .toString()
      .split("")
      .map((element) => Number(element));
    const sumDigits = digits.reduce((prev, curr) => prev + curr);

    if (sumDigits + i === num) {
      console.log(i);
      return;
    } else if (i === num) {
      console.log(0);
      return;
    }
  }
};

const closeHandler = () => {
  process.exit();
};

rl.on("line", lineHandler);
rl.on("close", closeHandler);
