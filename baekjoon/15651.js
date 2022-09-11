const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineHandler = (line) => {
  const [N, M] = line.split(" ").map((v) => +v);
  const tmp = Array.from({ length: M }, () => 0);
  const answer = [];

  const DFS = (L) => {
    if (L === M) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= N; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  };

  DFS(0);
  console.log(answer.map((v) => v.join(" ")).join(`\n`));
  process.exit();
};
rl.on("line", lineHandler);
