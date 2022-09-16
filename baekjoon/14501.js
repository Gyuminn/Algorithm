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

    let max = 0;
    const DFS = (start, sum) => {
      if (start > N) return;

      max = Math.max(max, sum);

      for (let i = start; i < N; i++) {
        DFS(i + arr[i][0], sum + arr[i][1]);
      }
    };

    DFS(0, 0);
    console.log(max);
    process.exit();
  }
};
rl.on("line", lineHandler);
