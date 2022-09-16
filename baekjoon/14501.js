const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > input[0][0]) {
    const [[N], ...arr] = input;

    let max = Number.MIN_SAFE_INTEGER;

    const DFS = (L, S, sum) => {
      if (!arr[S] || S + arr[S][0] > N) {
        max = Math.max(max, sum);
      } else {
        for (let i = S; i < N; i++) {
          if (i + arr[i][0] <= N) {
            sum += arr[i][1];
            DFS(L + 1, i + arr[i][0], sum);
            sum -= arr[i][1];
          }
        }
      }
    };

    DFS(0, 0, 0);
    console.log(max);
    process.exit();
  }
};
rl.on("line", lineHandler);
