const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineHandler = (line) => {
  const num = Number(line);
  const tmp = Array.from({ length: num }, () => 0);
  const visited = Array.from({ length: num + 1 }, () => 0);
  const answer = [];

  const DFS = (L) => {
    if (L === num) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= num; i++) {
        if (visited[i] === 0) {
          visited[i] = 1;
          tmp[L] = i;
          DFS(L + 1);
          visited[i] = 0;
        }
      }
    }
  };

  DFS(0);
  console.log(answer.map((v) => v.join(" ")).join(`\n`));
  process.exit();
};
rl.on("line", lineHandler);
