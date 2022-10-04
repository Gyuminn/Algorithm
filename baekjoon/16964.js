const sol = (input) => {
  const N = input[0][0];
  const order = input[input.length - 1];
  input.shift();
  input.pop();
  const relation = input;

  const graph = Array.from(Array(N + 1), () => Array());
  const visited = Array.from({ length: N + 1 }, () => 0);

  const answer = [];

  for (let [a, b] of relation) {
    graph[a].push(b);
    graph[b].push(a);
  }

  let sv = order[0];
  if (sv !== 1) return 0;

  for (let i = 1; i <= N; i++) {
    graph[i].sort((a, b) => {
      if (order.indexOf(a) < order.indexOf(b)) {
        return b - a;
      } else {
        return a - b;
      }
    });
  }

  const DFS = (v) => {
    answer.push(v);

    for (let i = 0; i < graph[v].length; i++) {
      const nv = graph[v][i];
      if (visited[nv] === 0) {
        visited[nv] = 1;
        DFS(nv);
      }
    }
  };

  visited[sv] = 1;
  DFS(sv);
  return JSON.stringify(answer) === JSON.stringify(order) ? 1 : 0;
};

const input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((v) => +v));

    if (input.length > input[0][0]) {
      console.log(sol(input));
      process.exit();
    }
  });
