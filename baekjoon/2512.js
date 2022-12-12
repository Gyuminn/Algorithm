const sol = (input) => {
  const N = input[0];
  const nations = input[1];
  const maxBudget = input[2];

  nations.sort((a, b) => a - b);

  let min = 0;
  let max = nations[N - 1];
  let mid;
  let answer;

  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    let sum = 0;
    nations.forEach((nationBudget) => {
      if (nationBudget < mid) {
        sum += nationBudget;
      } else {
        sum += mid;
      }
    });

    if (sum <= maxBudget) {
      min = mid + 1;
      answer = mid;
    } else {
      max = mid - 1;
    }
  }

  return answer;
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    if (input.length === 0 || input.length === 2) {
      input.push(+line);
    } else {
      input.push(line.split(" ").map((v) => +v));
    }

    if (input.length === 3) {
      console.log(sol(input));
      process.exit();
    }
  });
