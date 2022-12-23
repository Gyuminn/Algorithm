const sol = (input) => {
  const [[N], ...[nums]] = input;

  let answer = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < N; i++) {
    let lt = 0;
    let rt = N - 1;

    while (lt < rt) {
      // 서로 다른 두 숫자의 합으로 나타낼 때 i 번쨰 숫자는 제외되어야 한다.
      if (lt == i) {
        lt++;
        continue;
      }
      if (rt == i) {
        rt--;
        continue;
      }

      const a = nums[i];
      const b = nums[lt] + nums[rt];

      if (a == b) {
        answer++;
        break;
      }

      if (a > b) {
        lt++;
        continue;
      }
      rt--;
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
    input.push(line.split(" ").map((v) => +v));

    if (input.length == 2) {
      console.log(sol(input));
      process.exit();
    }
  });
