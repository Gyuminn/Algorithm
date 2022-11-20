const sol = (input) => {
  const N = input[0][0];
  const nums = input[1];
  const operators = input[2];

  const calc = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => ~~(a / b),
  ];

  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  const dfs = (L, temp) => {
    if (L === N - 1) {
      max = Math.max(max, temp);
      min = Math.min(min, temp);
      return;
    } else {
      for (let i = 0; i < 4; i++) {
        if (!operators[i]) continue;
        operators[i]--;
        dfs(L + 1, calc[i](temp, nums[L + 1]));
        operators[i]++;
      }
    }
  };

  dfs(0, nums[0]);
  let answer = [];
  answer.push(max);
  answer.push(min);

  return answer.join(`\n`);
};

const input = [];
require("readline")
  .createInterface({ input: process.stdin, output: process.stdout })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length == 3) {
      console.log(sol(input));
      process.exit();
    }
  });
