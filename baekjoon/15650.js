const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineHandler = (line) => {
  const [N, M] = line.split(" ").map((v) => +v);
  const visited = new Array(N);
  const answer = [];
  let result = "";

  const DFS = (idx, cnt) => {
    if (cnt === M) {
      result += `${answer.join(" ")}\n`;
      return;
    }

    for (let i = idx; i < N; i++) {
      if (visited[i] === true) continue;
      visited[i] = true;
      answer.push(i + 1);
      DFS(i, cnt + 1, result);
      answer.pop();
      visited[i] = false;
    }
  };
  DFS(0, 0);
  console.log(result);
  rl.close();
};

const closeHandler = () => {
  process.exit();
};
rl.on("line", lineHandler);
rl.on("close", closeHandler);
