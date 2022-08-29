const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineHandler = (line) => {
  const [N, M] = line.split(" ").map((v) => +v);
  const result = [];
  let answer = "";

  const DFS = (v) => {
    if (v === M) {
      answer += `${result.join(" ")}\n`;
      return;
    }

    for (let i = 0; i < N; i++) {
      result.push(i + 1);
      DFS(result.length);
      result.pop();
    }
  };
  DFS(0);
  console.log(answer.trim());
  process.exit();
};

rl.on("line", lineHandler);
