const sol = (input) => {
  const [[N, M], ...[arr]] = input;

  let left = 0;
  let right = 0;
  let answer = 0;
  let sum = arr[left];

  while (left < N && right < N) {
    if (sum === M) {
      answer++;
      sum += arr[++right];
      continue;
    }

    if (sum < M) {
      sum += arr[++right];
      continue;
    }

    if (sum > M) {
      sum -= arr[left++];
      continue;
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
    if (input.length === 2) {
      console.log(sol(input));
      process.exit();
    }
  });
