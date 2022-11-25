const sol = (input) => {
  const [[N, M, R], ...info] = input;

  const graph = Array.from(Array(N + 1), () => Array());
  const visited = Array.from({ length: N + 1 }, () => 0);

  for (let [u, v] of info) {
    graph[u].push(v);
    graph[v].push(u);
  }

  graph.forEach((row) => row.sort((a, b) => b - a));

  const bfs = (s) => {
    let cnt = 1;
    const queue = [];
    queue.push(s);
    visited[s] = cnt;

    while (queue.length) {
      const v = queue.shift();

      for (let i = 0; i < graph[v].length; i++) {
        const nx = graph[v][i];
        if (visited[nx]) continue;
        cnt++;
        visited[nx] = cnt;
        queue.push(nx);
      }
    }
  };

  bfs(R);
  visited.shift();
  return visited.join(`\n`);
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
