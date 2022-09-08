const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineHandler = (line) => {
  const nums = line.split("-").map((str) =>
    str
      .split("+")
      .map((v) => +v)
      .reduce((acc, cur) => acc + cur, 0)
  );
  let answer = 2 * nums[0] - nums.reduce((acc, cur) => acc + cur);
  console.log(answer);
  process.exit();
};
rl.on("line", lineHandler);
