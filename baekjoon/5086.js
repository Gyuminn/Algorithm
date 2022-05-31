const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line.split(" "));

  if (input[input.length - 1].includes("0") === true) {
    test(input);
    rl.close();
  }
};

const test = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    const num1 = Number(arr[i][0]);
    const num2 = Number(arr[i][1]);

    if (num2 / num1 >= 1 && num2 % num1 === 0) {
      console.log("factor");
    } else if (num1 / num2 >= 1 && num1 % num2 === 0) {
      console.log("multiple");
    } else {
      console.log("neither");
    }
  }
};
const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
