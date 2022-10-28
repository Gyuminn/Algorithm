const sol = (input) => {
  const nums = input[1];
  const targetNum = input[2][0];

  let cnt = 0;
  nums.forEach((v) => {
    if (v === targetNum) cnt++;
  });

  return cnt;
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length > 2) {
      console.log(sol(input));
      process.exit();
    }
  });
