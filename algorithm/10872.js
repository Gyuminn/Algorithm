const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let factorialArr = [];

function lineHandler(line) {
  const input = Number(line);
  factorial(input);
  let result = 1;
  for (let i = 0; i < factorialArr.length; i++) {
    result *= factorialArr[i];
  }
  console.log(result);
  rl.close();
}

function factorial(num) {
  if (num === 0) factorialArr.push(1);
  else factorialArr.push(num);

  if (num >= 2) factorial(num - 1);
}

function closeHandler() {
  process.exit();
}

rl.on("line", lineHandler);
rl.on("close", closeHandler);
