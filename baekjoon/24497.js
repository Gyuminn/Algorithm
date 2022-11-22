const sol = (input) => {
  const [[N, M, R], ...info] = input;

  const graph = Array.from(Array(N + 1), () => Array());

  for (let [u, v] of info) {
    graph[u].push(v);
    graph[v].push(u);
  }
  graph.forEach((vertex) => vertex.sort((a, b) => a - b));

  const visited = Array.from({ length: N + 1 }, () => 0);
  const answer = Array.from({ length: N + 1 }, () => 0);

  let cnt = 1;
  const dfs = (v) => {
    visited[v] = 1;
    answer[v] = cnt;
    cnt++;
    for (let i = 0; i < graph[v].length; i++) {
      if (visited[graph[v][i]]) continue;
      dfs(graph[v][i]);
    }
  };

  dfs(R);
  answer.shift();

  return answer.join(`\n`);
};

const input = [];
require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length > input[0][1]) {
      console.log(sol(input));
      process.exit();
    }
  });
