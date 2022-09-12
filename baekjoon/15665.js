const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > 1) {
    const [N, M] = input[0];
    const arr = input[1];
    arr.sort((a, b) => a - b);
    const tmp = Array.from({ length: M }, () => 0);
    const answer = [];

    const DFS = (L) => {
      if (L === M) {
        answer.push(tmp.slice());
      } else {
        for (let i = 0; i < N; i++) {
          tmp[L] = arr[i];
          DFS(L + 1);
        }
      }
    };

    DFS(0);
    console.log([...new Set(answer.map((v) => v.join(" ")))].join(`\n`));
    process.exit();
  }
};
rl.on("line", lineHandler);
