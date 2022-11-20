const sol = (input) => {
  const [[N], ...[sequence]] = input;

  const partSumOfSequence = Array.from({ length: 2000001 });

  const partOfSequence = [];

  const dfs = (L, S, leaf) => {
    if (L === leaf) {
      let sum = partOfSequence.reduce((acc, cur) => acc + cur, 0);
      if (!partSumOfSequence[sum]) {
        partSumOfSequence[sum] = 1;
      }
      return;
    } else {
      for (let i = S; i < sequence.length; i++) {
        partOfSequence.push(sequence[i]);
        dfs(L + 1, i + 1, leaf);
        partOfSequence.pop();
      }
    }
  };

  for (let i = 1; i <= N; i++) {
    dfs(0, 0, i);
  }

  let answer;
  for (let i = 1; i < partSumOfSequence.length; i++) {
    if (!partSumOfSequence[i]) {
      answer = i;
      break;
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
