const sol = (input) => {
  const [[N], ...[solutions]] = input;
  solutions.sort((a, b) => a - b);

  let answer = Array.from({ length: 2 });
  let max = Number.MAX_SAFE_INTEGER;
  let lt = 0;
  let rt = N - 1;

  while (lt < rt) {
    const sum = solutions[lt] + solutions[rt];

    if (Math.abs(sum) < max) {
      max = Math.abs(sum);
      answer = [solutions[lt], solutions[rt]];
    }

    if (sum < 0) {
      lt++;
    } else {
      rt--;
    }
  }

  return answer.join(" ");
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length === 2) {
      console.log(sol(input));
      process.exit();
    }
  });
