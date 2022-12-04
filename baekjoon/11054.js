const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [, arr] = input;
  const nums = arr.split(" ").map(Number);
  const N = nums.length;

  const upMemo = new Array(N).fill(1); // LIS
  const downMemo = new Array(N).fill(1); // LDS

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i] && upMemo[i] < upMemo[j] + 1) {
        upMemo[i] = upMemo[j] + 1;
      }
    }
  }

  for (let i = N - 1; i >= 0; i--) {
    for (let j = N - 1; j > i; j--) {
      if (nums[j] < nums[i] && downMemo[i] < downMemo[j] + 1) {
        downMemo[i] = downMemo[j] + 1;
      }
    }
  }

  let max = 0;
  for (let i = 0; i < N; i++) {
    max = Math.max(max, upMemo[i] + downMemo[i]);
  }

  console.log(max - 1);

  process.exit();
});
