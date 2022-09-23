const sol = (input) => {
  const [[N, M], ...relation] = input;

  const graph = Array.from(Array(N + 1), () => Array());
  const visited = Array.from({ length: N + 1 }, () => 0);
  let cnt = 0;

  for (let [a, b] of relation) {
    graph[a].push(b);
    graph[b].push(a);
  }
  const DFS = (v) => {
    if (visited[v]) return;
    visited[v] = 1;

    for (let i = 0; i < graph[v].length; i++) {
      if (visited[graph[v][i]] === 0) {
        DFS(graph[v][i]);
      }
    }
  };

  for (let i = 1; i <= N; i++) {
    if (visited[i] === 0) {
      DFS(i);
      cnt++;
    }
  }
  return cnt;
};

const input = [];

const lineHandler = (line) => {
  input.push(line.split(" ").map((v) => +v));

  if (input.length > input[0][1]) {
    console.log(sol(input));
    process.exit();
  }
};
require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", lineHandler);
