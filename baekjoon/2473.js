const sol = (input) => {
  const [[N], ...[nums]] = input;
  nums.sort((a, b) => a - b);

  let MIN_ABS_SUM = Number.MAX_SAFE_INTEGER;
  const answer = Array.from({ length: 3 });

  for (let i = 0; i < N - 1; i++) {
    let lt = i + 1;
    let rt = N - 1;

    while (lt < rt) {
      const sum = nums[i] + nums[lt] + nums[rt];
      const absSum = Math.abs(sum);
      if (absSum < MIN_ABS_SUM) {
        MIN_ABS_SUM = absSum;
        answer[0] = nums[i];
        answer[1] = nums[lt];
        answer[2] = nums[rt];

        if (sum == 0) {
          break;
        }
      }

      if (sum < 0) {
        lt++;
      } else {
        rt--;
      }
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

    if (input.length == 2) {
      console.log(sol(input));
      process.exit();
    }
  });
