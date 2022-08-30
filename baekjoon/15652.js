const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineHandler = (line) => {
  const [N, M] = line.split(" ").map((v) => +v);
  const result = [];
  let answer = "";

  const DFS = (L, cnt) => {
    if (cnt === M) {
      answer += `${result.join(" ")}\n`;
      return;
    }

    for (let i = L; i < N; i++) {
      result.push(i + 1);
      DFS(i, result.length);
      result.pop();
    }
  };
  DFS(0, 0);
  console.log(answer);
  process.exit();
};

rl.on("line", lineHandler);
