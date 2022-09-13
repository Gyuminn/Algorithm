const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineHandler = (line) => {
  const [N, M] = line.split(" ").map((v) => +v);
  const visited = Array.from({ length: N + 1 }, () => 0);
  const tmp = Array.from({ length: M }, () => 0);
  const answer = [];

  const DFS = (L, S) => {
    if (L === M) {
      answer.push(tmp.slice());
    } else {
      for (let i = S; i <= N; i++) {
        if (visited[i] === 0) {
          tmp[L] = i;
          DFS(L + 1, i + 1);
        }
      }
    }
  };
  DFS(0, 1);
  console.log(answer.map((v) => v.join(" ")).join(`\n`));
  process.exit();
};

rl.on("line", lineHandler);
