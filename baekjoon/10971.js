const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > input[0][0]) {
    const [[N], ...W] = input;
    const permutations = [];
    const tmp = Array.from({ length: N }, () => 0);
    const visited = Array.from({ length: N }, () => 0);
    const answer = [];

    const DFS = (L) => {
      if (L === N) {
        permutations.push(tmp.slice());
      } else {
        for (let i = 0; i < N; i++) {
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
    permutations.forEach((v) => {
      let sum = 0;
      for (let i = 0; i < v.length - 1; i++) {
        sum += W[v[i]][v[i + 1]];
      }
      sum += W[v[v.length - 1]][v[0]];
      answer.push(sum);
    });

    console.log(Math.min(...answer));

    process.exit();
  }
};
rl.on("line", lineHandler);
