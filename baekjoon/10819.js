const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > 1) {
    const N = input[0][0];
    const arr = input[1];
    const tmp = Array.from({ length: N }, () => 0);
    const visited = Array.from({ length: N }, () => 0);
    const permutations = [];
    const answer = [];

    const DFS = (L) => {
      if (L === N) {
        permutations.push(tmp.slice());
      } else {
        for (let i = 0; i < N; i++) {
          if (visited[i] === 0) {
            visited[i] = 1;
            tmp[L] = arr[i];
            DFS(L + 1);
            visited[i] = 0;
          }
        }
      }
    };

    DFS(0);

    permutations.forEach((v) => {
      let sum = 0;
      for (let i = 0; i < N - 1; i++) {
        sum += Math.abs(v[i] - v[i + 1]);
      }
      answer.push(sum);
    });
    console.log(Math.max(...answer));
    process.exit();
  }
};
rl.on("line", lineHandler);
