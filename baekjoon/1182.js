const sol = (input) => {
  const [N, S] = input[0];
  const arr = input[1];

  const answer = [];
  let cnt = 0;

  const DFS = (L, start, num, tmp) => {
    if (L === num) {
      answer.push(tmp.slice());
    } else {
      for (let i = start; i < N; i++) {
        tmp[L] = arr[i];
        DFS(L + 1, i + 1, num, tmp);
      }
    }
  };

  for (let i = 1; i <= N; i++) {
    const tmp = Array.from({ length: i }, () => 0);
    DFS(0, 0, i, tmp);
  }

  answer.forEach((arr) => {
    if (arr.reduce((acc, cur) => acc + cur) == S) cnt++;
  });
  return cnt;
};

const input = [];

const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > 1) {
    console.log(sol(input));
    process.exit();
  }
};
require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", lineHandler);
