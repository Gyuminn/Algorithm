const sol = (input) => {
  const [[N], ...relation] = input;

  const visited = Array.from({ length: N + 1 }, () => 0);
  const graph = Array.from(Array(N + 1), () => Array());
  const checkCycle = Array.from({ length: N + 1 }, () => 0);
  const answer = [];

  let flag = 0;

  for (let [a, b] of relation) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const DFS = (v, sv, line) => {
    if (flag) return;

    for (let i = 0; i < graph[v].length; i++) {
      const nv = graph[v][i];
      if (visited[nv] === 0) {
        visited[nv] = 1;
        DFS(nv, sv, line + 1);
        visited[nv] = 0;
      } else if (nv === sv && line >= 2) {
        flag = 1;
        checkCycle[sv] = 1;
        return;
      }
    }
  };

  const BFS = (v, cnt) => {
    const queue = [];
    queue.push([v, cnt]);

    while (queue.length) {
      const [v, cnt] = queue.shift();
      if (checkCycle[v] === 1) {
        answer.push(cnt);
        return;
      }

      for (let i = 0; i < graph[v].length; i++) {
        const nv = graph[v][i];
        queue.push([nv, cnt + 1]);
      }
    }
  };

  for (let i = 1; i <= N; i++) {
    visited[i] = 1;
    DFS(i, i, 0);
    visited[i] = 0;
    flag = 0;
  }

  for (let i = 1; i <= N; i++) {
    if (checkCycle[i] === 1) {
      answer.push(0);
    } else {
      BFS(i, 0);
    }
  }

  return answer.join(" ");
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
